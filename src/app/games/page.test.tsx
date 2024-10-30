import { render, screen, waitFor } from '@testing-library/react';
import Games from '@/app/games/page';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';
import useFetchData from '@/hooks/useFetchData';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/useFetchData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const component = (
  <ViewportProvider>
    <FlashMessageProvider>
      <ContactFormProvider>
        <Games />
      </ContactFormProvider>
    </FlashMessageProvider>
  </ViewportProvider>
);

describe('Games Page', () => {
  const mockGamesData = [
    {
      id: 1,
      name: 'Game 1',
      icon: 'icon1.webp',
      description: 'Description for Game 1',
    },
    {
      id: 2,
      name: 'Game 2',
      icon: 'icon2.webp',
      description: 'Description for Game 2',
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockGamesData),
      }),
    ) as jest.Mock;
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockGamesData,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    document.cookie = 'allow-cookies=accept';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
  });

  it('renders the games title and description correctly', async () => {
    render(component);

    const title = screen.getByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('GAMES');

    const body = screen.getByText('These are the games I have developed');
    expect(body).toHaveAttribute('data-testid', 'text-body');
  });

  it('fetches and displays games from the API', async () => {
    render(component);

    await waitFor(() => {
      mockGamesData.forEach((game) => {
        expect(screen.getByText(game.name)).toBeInTheDocument();
        expect(screen.getByText(game.description)).toBeInTheDocument();
      });
    });
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import Games from '@/app/games/page';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
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

    const body = screen.getByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('These are the games I have developed');
  });

  it('fetches and displays games from the API', async () => {
    render(component);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/games');
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      mockGamesData.forEach((game) => {
        expect(screen.getByText(game.name)).toBeInTheDocument();
        expect(screen.getByText(game.description)).toBeInTheDocument();
      });
    });
  });
});

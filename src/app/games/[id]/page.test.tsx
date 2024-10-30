import { useParams } from 'next/navigation';
import { render, screen, waitFor } from '@testing-library/react';
import GameDetails from '@/app/games/[id]/page';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';
import useFetchData from '@/hooks/useFetchData';

const mockGameData = {
  id: 1,
  name: 'Game 1',
  icon: 'icon1.webp',
  description: 'Description for Game 1',
  details: 'detail 1;detail 2',
  link: '/downloads/test.zip',
};
jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '1' }),
  useRouter: jest.fn(),
}));

jest.mock('@/hooks/useFetchData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Game Details Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockGameData),
      }),
    ) as jest.Mock;
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockGameData,
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

  it('renders the game title, description, and details correctly', async () => {
    render(
      <ViewportProvider>
        <FlashMessageProvider>
          <ContactFormProvider>
            <GameDetails />
          </ContactFormProvider>
        </FlashMessageProvider>
      </ViewportProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('triple-spinner')).not.toBeInTheDocument();
    });

    const title = await screen.findByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockGameData.name.toUpperCase());

    const body = await screen.findByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent(mockGameData.description);

    await waitFor(() => {
      mockGameData.details.split(';').forEach((currDetail) => {
        expect(screen.getByText(currDetail)).toBeInTheDocument();
        expect(screen.getByText(currDetail)).toBeInTheDocument();
      });
    });
  });
});

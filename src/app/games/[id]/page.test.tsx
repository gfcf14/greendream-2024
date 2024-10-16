import { useParams } from 'next/navigation';
import { render, screen, waitFor } from '@testing-library/react';
import GameDetails from '@/app/games/[id]/page';
import { ViewportProvider } from '@/context/ViewportContext';

const mockGameData = [
  {
    id: 1,
    name: 'Game 1',
    icon: 'icon1.png',
    description: 'Description for Game 1',
    details: 'detail 1;detail 2',
    link: '/downloads/test.zip',
  },
];

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '1' }),
  useRouter: jest.fn(),
}));

describe('Game Details Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockGameData[0]),
      }),
    ) as jest.Mock;
    document.cookie = 'allow-cookies=accept';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
  });

  it('renders the game title, description, and details correctly', async () => {
    render(
      <ViewportProvider>
        <GameDetails />
      </ViewportProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('triple-spinner')).not.toBeInTheDocument();
    });

    const title = await screen.findByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockGameData[0].name.toUpperCase());

    const body = await screen.findByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent(mockGameData[0].description);

    await waitFor(() => {
      mockGameData[0].details.split(';').forEach((currDetail) => {
        expect(screen.getByText(currDetail)).toBeInTheDocument();
        expect(screen.getByText(currDetail)).toBeInTheDocument();
      });
    });
  });
});

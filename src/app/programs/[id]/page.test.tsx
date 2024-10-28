import { render, screen, waitFor } from '@testing-library/react';
import GameDetails from '@/app/games/[id]/page';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';

const mockProgramData = [
  {
    id: 1,
    name: 'Program 1',
    icon: 'icon1.webp',
    description: 'Description for Program 1',
    details: 'detail 1;detail 2',
    link: '/downloads/test.zip',
  },
];

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '1' }),
  useRouter: jest.fn(),
}));

describe('Program Details Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProgramData[0]),
      }),
    ) as jest.Mock;
    document.cookie = 'allow-cookies=accept';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
  });

  it('renders the program title, description, and details correctly', async () => {
    render(
      <ViewportProvider>
        <FlashMessageProvider>
          <GameDetails />
        </FlashMessageProvider>
      </ViewportProvider>,
    );

    await waitFor(() => {
      expect(screen.queryByTestId('triple-spinner')).not.toBeInTheDocument();
    });

    const title = await screen.findByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockProgramData[0].name.toUpperCase());

    const body = await screen.findByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent(mockProgramData[0].description);

    await waitFor(() => {
      mockProgramData[0].details.split(';').forEach((currDetail) => {
        expect(screen.getByText(currDetail)).toBeInTheDocument();
        expect(screen.getByText(currDetail)).toBeInTheDocument();
      });
    });
  });
});

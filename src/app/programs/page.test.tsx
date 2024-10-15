import { render, screen, waitFor } from '@testing-library/react';
import Programs from '@/app/programs/page';
import { ViewportProvider } from '@/context/ViewportContext';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Programs Page', () => {
  const mockProgramsData = [
    {
      id: 1,
      name: 'Program 1',
      icon: 'icon1.png',
      description: 'Description for Program 1',
    },
    {
      id: 2,
      name: 'Program 2',
      icon: 'icon2.png',
      description: 'Description for Program 2',
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProgramsData),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the programs title and description correctly', async () => {
    render(
      <ViewportProvider>
        <Programs />
      </ViewportProvider>,
    );

    const title = screen.getByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('PROGRAMS');

    const body = screen.getByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('These are the programs I have developed');
  });

  it('fetches and displays programs from the API', async () => {
    render(
      <ViewportProvider>
        <Programs />
      </ViewportProvider>,
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/programs');
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      mockProgramsData.forEach((program) => {
        expect(screen.getByText(program.name)).toBeInTheDocument();
        expect(screen.getByText(program.description)).toBeInTheDocument();
      });
    });
  });
});

import { useParams } from 'next/navigation';
import { render, screen, waitFor } from '@testing-library/react';
import ProgramDetails from '@/app/programs/[id]/page';
import { ViewportProvider } from '@/context/ViewportContext';

const mockProgramData = [
  {
    id: 1,
    name: 'Program 1',
    icon: 'icon1.png',
    description: 'Description for Program 1',
    details: 'detail 1;detail 2',
    link: '/downloads/test.zip',
  },
];

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

describe('Program Details Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProgramData[0]),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the program title, description, and details correctly', async () => {
    render(
      <ViewportProvider>
        <ProgramDetails />
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

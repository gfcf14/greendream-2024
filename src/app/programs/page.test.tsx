import { render, screen, waitFor } from '@testing-library/react';
import Programs from '@/app/programs/page';
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
        <Programs />
      </ContactFormProvider>
    </FlashMessageProvider>
  </ViewportProvider>
);

describe('Programs Page', () => {
  const mockProgramsData = [
    {
      id: 1,
      name: 'Program 1',
      icon: 'icon1.webp',
      description: 'Description for Program 1',
    },
    {
      id: 2,
      name: 'Program 2',
      icon: 'icon2.webp',
      description: 'Description for Program 2',
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockProgramsData),
      }),
    ) as jest.Mock;
    document.cookie = 'allow-cookies=accept';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
  });

  it('renders the programs title and description correctly', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: null,
      loading: true,
      error: null,
      refetch: jest.fn(),
    });
    render(component);

    const title = screen.getByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('PROGRAMS');

    const body = screen.getByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('These are the programs I have developed');
  });

  it('fetches and displays programs from the API', async () => {
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockProgramsData,
      loading: false,
      error: null,
      refetch: jest.fn(),
    });
    render(component);

    await waitFor(() => {
      mockProgramsData.forEach((program) => {
        expect(screen.getByText(program.name)).toBeInTheDocument();
        expect(screen.getByText(program.description)).toBeInTheDocument();
      });
    });
  });
});

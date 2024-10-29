import { render, screen, waitFor } from '@testing-library/react';
import Programs from '@/app/programs/page';
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
    render(component);

    const title = screen.getByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('PROGRAMS');

    const body = screen.getByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('These are the programs I have developed');
  });

  it('fetches and displays programs from the API', async () => {
    render(component);

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

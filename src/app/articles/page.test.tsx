import { render, screen, waitFor } from '@testing-library/react';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';
import useFetchData from '@/hooks/useFetchData';
import Articles from './page';

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
        <Articles />
      </ContactFormProvider>
    </FlashMessageProvider>
  </ViewportProvider>
);

describe('Articles Page', () => {
  const mockArticlesData = [
    {
      description: 'test description 1',
      image: 'test-1.webp',
      title: 'test title 1',
      url: 'www.test-1.com',
    },
    {
      description: 'test description 2',
      image: 'test-2.webp',
      title: 'test title 2',
      url: 'www.test-2.com',
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockArticlesData),
      }),
    ) as jest.Mock;
    (useFetchData as jest.Mock).mockReturnValue({
      data: mockArticlesData,
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

  it('renders the page title and description correctly', async () => {
    render(component);

    const title = screen.getByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('ARTICLES');

    const body = screen.getByText('These are the articles I have written');
    expect(body).toHaveAttribute('data-testid', 'text-body');
  });

  it('fetches and displays articles from the API', async () => {
    render(component);

    await waitFor(() => {
      mockArticlesData.forEach((article) => {
        expect(screen.getByText(article.title)).toBeInTheDocument();
        expect(screen.getByText(article.description)).toBeInTheDocument();
      });
    });
  });
});

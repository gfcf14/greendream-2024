import { render, screen, waitFor } from '@testing-library/react';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';
import Articles from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

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
    document.cookie = 'allow-cookies=accept';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
  });

  it('renders the page title and description correctly', async () => {
    render(
      <ViewportProvider>
        <FlashMessageProvider>
          <Articles />
        </FlashMessageProvider>
      </ViewportProvider>,
    );

    const title = screen.getByTestId('text-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('ARTICLES');

    const body = screen.getByTestId('text-body');
    expect(body).toBeInTheDocument();
    expect(body).toHaveTextContent('These are the articles I have written');
  });

  it('fetches and displays articles from the API', async () => {
    render(
      <ViewportProvider>
        <FlashMessageProvider>
          <Articles />
        </FlashMessageProvider>
      </ViewportProvider>,
    );

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/articles');
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    await waitFor(() => {
      mockArticlesData.forEach((article) => {
        expect(screen.getByText(article.title)).toBeInTheDocument();
        expect(screen.getByText(article.description)).toBeInTheDocument();
      });
    });
  });
});

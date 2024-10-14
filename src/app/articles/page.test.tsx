import { render, screen, waitFor } from '@testing-library/react';
import { ViewportProvider } from '@/context/ViewportContext';
import Articles from './page';

describe('Articles Page', () => {
  const mockArticlesData = [
    {
      description: 'test description 1',
      image: 'test-1.png',
      title: 'test title 1',
      url: 'www.test-1.com',
    },
    {
      description: 'test description 2',
      image: 'test-2.png',
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
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the page title and description correctly', async () => {
    render(
      <ViewportProvider>
        <Articles />
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
        <Articles />
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

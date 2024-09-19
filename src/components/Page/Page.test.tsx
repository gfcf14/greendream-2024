import { render, screen } from '@testing-library/react';
import { ViewportProvider } from '@/context/ViewportContext';
import Page from '.';

describe('Page component', () => {
  it('renders a non-hero page', () => {
    render(
      <ViewportProvider>
        <Page>
          <p>test</p>
        </Page>
      </ViewportProvider>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('page-content')).toHaveClass('page');
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('renders a hero page', () => {
    render(
      <ViewportProvider>
        <Page isHero>
          <p>test</p>
        </Page>
      </ViewportProvider>,
    );

    expect(screen.getByTestId('page-content')).not.toHaveClass('page');
  });
});

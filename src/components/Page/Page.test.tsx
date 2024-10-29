import { render, screen } from '@testing-library/react';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import { ViewportProvider } from '@/contexts/ViewportContext';
import Page from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Page component', () => {
  it('renders a non-hero page', () => {
    render(
      <ViewportProvider>
        <FlashMessageProvider>
          <ContactFormProvider>
            <Page>
              <p>test</p>
            </Page>
          </ContactFormProvider>
        </FlashMessageProvider>
      </ViewportProvider>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('page-content')).toHaveClass('page');
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('renders a hero page', () => {
    render(
      <ViewportProvider>
        <FlashMessageProvider>
          <ContactFormProvider>
            <Page isHero>
              <p>test</p>
            </Page>
          </ContactFormProvider>
        </FlashMessageProvider>
      </ViewportProvider>,
    );

    expect(screen.getByTestId('page-content')).not.toHaveClass('page');
  });
});

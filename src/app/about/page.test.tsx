import { render, screen, within } from '@testing-library/react';
import { ViewportProvider } from '@/context/ViewportContext';
import About from './page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('About page', () => {
  it('renders the page components successfully', () => {
    render(
      <ViewportProvider>
        <About />
      </ViewportProvider>,
    );

    expect(screen.getAllByTestId('section-wrapper')).toHaveLength(2);
    expect(screen.getAllByTestId('section')).toHaveLength(5);
    expect(screen.getAllByTestId('split-content-wrapper')).toHaveLength(3);
    expect(screen.getAllByTestId('call-to-action-wrapper')).toHaveLength(1);

    // check how many professional links there are
    const professionalLinksWrapper = screen.getByTestId(
      'external-professional-links-wrapper',
    );
    const professionalLinks = within(professionalLinksWrapper).getAllByTestId(
      'external-link-wrapper',
    );
    expect(professionalLinks).toHaveLength(4);

    // check how many creative links there are
    const creativeLinksWrapper = screen.getByTestId(
      'external-creative-links-wrapper',
    );
    const creativeLinks = within(creativeLinksWrapper).getAllByTestId(
      'external-link-wrapper',
    );
    expect(creativeLinks).toHaveLength(4);

    // check how many comic links there are
    const comicLinksWrapper = screen.getByTestId(
      'external-comic-links-wrapper',
    );
    const comicLinks = within(comicLinksWrapper).getAllByTestId(
      'external-link-wrapper',
    );
    expect(comicLinks).toHaveLength(3);
  });
});

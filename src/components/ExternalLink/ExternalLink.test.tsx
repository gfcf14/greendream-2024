import { render, screen } from '@testing-library/react';
import ExternalLink from '.';

describe('ExternalLink component', () => {
  const url = 'http://www.example.com/';
  const text = 'example';

  it('renders the component without a logo successfully', () => {
    render(<ExternalLink text={text} url={url} />);

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByAltText('external-link-icon')).toHaveProperty(
      'src',
      expect.stringContaining('/images/icons/external.svg'),
    );
    expect(screen.getByTestId('external-link-wrapper')).toHaveProperty(
      'href',
      url,
    );
  });

  it('renders the component with a logo successfully', () => {
    const logo = 'test-logo.webp';

    render(<ExternalLink logo={logo} text={text} url={url} />);

    expect(screen.getByAltText('external-link-logo')).toHaveProperty(
      'src',
      expect.stringContaining(`/images/site-logos/${logo}`),
    );
  });
});

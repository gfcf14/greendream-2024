import { render, screen } from '@testing-library/react';
import AssetLogo from '.';

describe('AssetLogo component', () => {
  it('renders the non-card component successfully', () => {
    render(<AssetLogo icon="test.png" />);

    const contentImage = screen.getByAltText('content-image');

    expect(contentImage).toBeInTheDocument();
    expect(contentImage.getAttribute('src')).toContain(
      encodeURIComponent('/images/logos/test.png'),
    );
  });

  it('renders the component successfully as a card', () => {
    render(<AssetLogo icon="test.png" isCard />);
    expect(screen.getByAltText('content-image')).toHaveClass('card');
  });
});

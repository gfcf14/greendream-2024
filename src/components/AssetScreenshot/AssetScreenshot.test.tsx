import { render, screen } from '@testing-library/react';
import AssetScreenshot from '.';

describe('AssetScreenshot component', () => {
  it('renders the component successfully', () => {
    render(<AssetScreenshot file="test.webp" />);
    expect(screen.getByTestId('asset-screenshot')).toHaveStyle(
      'background-image: url("/images/screenshots/test.webp")',
    );
  });
});

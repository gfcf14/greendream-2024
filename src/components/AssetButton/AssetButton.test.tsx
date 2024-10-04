import { render, screen } from '@testing-library/react';
import AssetButton from '.';

describe('AssetButton component', () => {
  it('renders the component successfully for non-downloads', () => {
    render(<AssetButton isDownload={false} link="https://www.example.com/" />);

    expect(screen.getByTestId('asset-button-link')).toBeInTheDocument();
    expect(screen.getByText(/VIEW/i)).toBeInTheDocument();
  });

  it('renders the component successfully for downloads', () => {
    render(<AssetButton isDownload={true} link="/downloads/example" />);

    const assetButtonLink = screen.getByTestId('asset-button-link');
    expect(assetButtonLink).toBeInTheDocument();
    expect(assetButtonLink).toHaveProperty('download');

    expect(screen.getByText(/DOWNLOAD/i)).toBeInTheDocument();
  });
});

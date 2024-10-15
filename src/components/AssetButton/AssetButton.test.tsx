import { render, screen } from '@testing-library/react';
import AssetButton from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('AssetButton component', () => {
  it('renders the component successfully for non-downloads', () => {
    render(<AssetButton isDownload={false} link="https://www.example.com/" />);

    expect(screen.getByTestId('asset-button-link')).toBeInTheDocument();
    expect(screen.getByText(/VIEW/i)).toBeInTheDocument();
  });

  it('renders the component successfully for downloads', () => {
    render(<AssetButton isDownload={true} link="/downloads/example" />);

    expect(screen.getByText(/DOWNLOAD/i)).toBeInTheDocument();
  });
});

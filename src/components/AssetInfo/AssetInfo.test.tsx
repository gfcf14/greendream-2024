import { render, screen } from '@testing-library/react';
import AssetInfo from '.';

describe('AssetInfo component', () => {
  it('renders the component successfully', () => {
    render(
      <AssetInfo>
        <p>test</p>
      </AssetInfo>,
    );
    expect(screen.getByTestId('asset-info-wrapper')).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

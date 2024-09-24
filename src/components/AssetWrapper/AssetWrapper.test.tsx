import { render, screen } from '@testing-library/react';
import AssetWrapper from '.';

describe('AssetWrapper component', () => {
  it('ensures the component renders correctly', () => {
    render(
      <AssetWrapper>
        <p>test</p>
      </AssetWrapper>,
    );

    expect(screen.getByTestId('asset-wrapper')).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

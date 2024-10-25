import { render, screen } from '@testing-library/react';
import LatestAssetWrapper from '.';

describe('LatestAssetWrapper component', () => {
  it('renders the component correctly', () => {
    render(
      <LatestAssetWrapper>
        <p>{'test'}</p>
      </LatestAssetWrapper>,
    );

    expect(screen.getByTestId('latest-asset-wrapper')).toBeInTheDocument();
  });
});

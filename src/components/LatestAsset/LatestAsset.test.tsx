import { render, screen } from '@testing-library/react';
import LatestAsset from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LatestAsset component', () => {
  it('renders the component successfully', () => {
    render(
      <LatestAsset icon="test-icon.png" name="test-name" type="program" />,
    );

    expect(screen.getByText(/Program:/i)).toBeInTheDocument();
    expect(screen.getByText(/test-name/i)).toBeInTheDocument();
    expect(screen.getByAltText('latest-asset-image')).toHaveProperty(
      'src',
      expect.stringContaining('test-icon.png'),
    );
  });
});

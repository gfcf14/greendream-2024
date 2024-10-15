import { render, screen } from '@testing-library/react';
import SplitContent from '.';

describe('SplitContent component', () => {
  it('renders the component successfully', () => {
    render(<SplitContent image="test.png" text="test" />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByAltText('content-image')).toHaveAttribute(
      'src',
      expect.stringContaining('test.png'),
    );
  });

  it('renders the component with image attributes successfully', () => {
    render(<SplitContent image="test.png" rounded text="test" />);

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByAltText('content-image')).toHaveClass('rounded');
  });
});

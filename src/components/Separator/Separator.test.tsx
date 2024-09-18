import { render, screen } from '@testing-library/react';
import Separator from '.';

describe('Separator component', () => {
  it('renders the separator content correctly', () => {
    render(<Separator text="test" />);

    const separator = screen.getByText('test');

    expect(separator).toBeInTheDocument();
    expect(separator.tagName).toBe('H6');
  });
});

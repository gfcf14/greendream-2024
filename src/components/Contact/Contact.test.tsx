import { render, screen } from '@testing-library/react';
import Contact from '.';

describe('Contact component', () => {
  it('renders the component successfully', () => {
    render(<Contact onSubmit={jest.fn()} />);

    expect(screen.getAllByTestId('input-element')).toHaveLength(2);
    expect(screen.getAllByTestId('textarea-element')).toHaveLength(1);
  });
});

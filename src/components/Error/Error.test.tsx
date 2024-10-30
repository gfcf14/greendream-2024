import { render, screen } from '@testing-library/react';
import Error from '.';

describe('Error component', () => {
  it('renders the component correctly', () => {
    render(<Error action={jest.fn()} />);

    expect(
      screen.getByText(/An error has occurred. Please try again./i),
    ).toBeInTheDocument();
  });
});

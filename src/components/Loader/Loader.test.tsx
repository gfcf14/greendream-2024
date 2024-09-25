import { render, screen } from '@testing-library/react';
import Loader from '.';

describe('Loader component', () => {
  it('ensures the component renders correctly', () => {
    render(<Loader />);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
    expect(screen.getByTestId('triple-spinner')).toBeInTheDocument();
  });
});

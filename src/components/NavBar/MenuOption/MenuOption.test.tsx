import { getByText, render, screen } from '@testing-library/react';
import MenuOption from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('NavBar MenuOption component', () => {
  it('renders a MenuOption text correctly', () => {
    render(<MenuOption text="test" />);

    const button = screen.getByTestId('menu-option');
    expect(button).toBeInTheDocument();
    expect(getByText(button, 'test')).toBeInTheDocument();
  });

  it('renders a MenuOption link correctly', () => {
    render(<MenuOption text="test" link="/test" />);

    const link = screen.getByTestId('menu-link');
    expect(link).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import Menu from '.';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';

jest.mock('@/helpers/renderMenuOptions', () => ({
  renderMenuOptions: jest.fn(),
}));

describe('NavBar Menu component', () => {
  beforeEach(() => {
    (renderMenuOptions as jest.Mock).mockClear();
  });

  it('should call renderMenuOptions and render its output', () => {
    (renderMenuOptions as jest.Mock).mockReturnValue(
      <li>
        <a href="/home">Home</a>
      </li>,
    );

    render(<Menu />);
    expect(renderMenuOptions).toHaveBeenCalled();
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('should render the divider', () => {
    render(<Menu />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('should render the contact Button with the correct props', () => {
    render(<Menu />);

    const button = screen.getByRole('button', { name: /contact/i });
    expect(button).toBeInTheDocument();
  });
});

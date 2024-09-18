import { render, screen } from '@testing-library/react';
import Overlay from '.';

const onClick = jest.fn();

describe('NavBar Overlay component', () => {
  it('renders the single letter logo successfully', () => {
    render(<Overlay className="open" isMobile onClick={onClick} />);

    const logo = screen.getByAltText('Single Letter Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo-single-letter.svg');
  });
});

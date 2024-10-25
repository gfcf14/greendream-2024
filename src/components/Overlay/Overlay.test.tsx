import { render, screen } from '@testing-library/react';
import Overlay from '.';

const onClick = jest.fn();

describe('Overlay component', () => {
  it('renders the single letter logo successfully', () => {
    render(<Overlay isOpen isMobile onClick={onClick} />);

    const logo = screen.getByAltText('Single Letter Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo-single-letter.svg');
  });
});

import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button component', () => {
  it('renders the correct content if action is provided', () => {
    render(<Button action="contact" onClick={jest.fn()} type="menu" />);

    const iconImage = screen.getByAltText('action-contact');
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('src', '/images/icons/mail.svg');
  });

  it('renders the content for a hero button', () => {
    render(<Button onClick={jest.fn()} text="test" type="hero" />);

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});

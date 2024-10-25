import { render, screen } from '@testing-library/react';
import Sandwich from '.';

const onClick = jest.fn();

describe('NavBar Sandwich component', () => {
  it('renders the spans successfully', () => {
    render(<Sandwich isOpen onClick={onClick} />);

    const spans = screen.getAllByTestId('burger-span');
    expect(spans).toHaveLength(3);
  });
});

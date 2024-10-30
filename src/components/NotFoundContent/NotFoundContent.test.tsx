import { render, screen } from '@testing-library/react';
import NotFoundContent from '.';

describe('NotFoundContent component', () => {
  it('renders the component successfully', () => {
    render(<NotFoundContent />);

    expect(screen.getByTestId('text')).toHaveTextContent(
      /The page you entered doesn't exist. Hyperdrive redirect on 200!/i,
    );
  });
});

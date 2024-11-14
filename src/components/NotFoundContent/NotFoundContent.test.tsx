import { render, screen } from '@testing-library/react';
import NotFoundContent from '.';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('NotFoundContent component', () => {
  it('renders the component successfully', () => {
    render(<NotFoundContent />);

    expect(screen.getByTestId('text')).toHaveTextContent(
      /The page you entered doesn't exist. Hyperdrive redirect on 200!/i,
    );
  });
});

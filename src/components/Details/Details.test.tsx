import { render, screen, within } from '@testing-library/react';
import Details from '.';

const testDetails = ['detail1', 'detail2'];

describe('Details component', () => {
  it('renders the component successfully', () => {
    render(<Details details={testDetails} />);

    expect(screen.getByTestId('details-title')).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();

    const detailsList = screen.getByTestId('details-list');
    const details = within(detailsList).getAllByRole('listitem');

    expect(details).toHaveLength(2);

    details.forEach((li, i) => {
      expect(li).toHaveTextContent(`detail${i + 1}`);
    });
  });
});

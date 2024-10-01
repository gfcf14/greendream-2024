import { render, screen } from '@testing-library/react';
import Card from '.';

const cardProps = {
  description: 'test description',
  icon: 'test-icon.png',
  id: 0,
  name: 'test name',
  type: 'program',
};

describe('Card component', () => {
  it('ensures the component renders successfully', () => {
    render(<Card {...cardProps} isMobile />);

    expect(screen.getByTestId('display-toggle')).toBeInTheDocument();
    expect(screen.getByAltText('content-image').getAttribute('src')).toContain(
      encodeURIComponent(cardProps.icon),
    );
  });

  it('ensures the display toggle doesn`t render on non mobile', () => {
    render(<Card {...cardProps} isMobile={false} />);

    expect(screen.queryByTestId('display-toggle')).toBeNull();
  });
});

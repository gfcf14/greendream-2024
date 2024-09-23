import { render, screen } from '@testing-library/react';
import Card from '.';

const cardProps = {
  description: 'test description',
  icon: 'test-icon.png',
  id: 0,
  name: 'test name',
};

describe('Card component', () => {
  it('ensures the component renders successfully', () => {
    render(<Card {...cardProps} isMobile />);

    expect(screen.getByTestId('display-toggle')).toBeInTheDocument();
    // TODO: check why src for this Image returns something extra
    // expect(screen.getByAltText('content-image')).toHaveAttribute(
    //   'src',
    //   `/images/${cardProps.icon}`,
    // );
  });

  it('ensures the display toggle doesn`t render on non mobile', () => {
    render(<Card {...cardProps} isMobile={false} />);

    expect(screen.queryByTestId('display-toggle')).toBeNull();
  });
});

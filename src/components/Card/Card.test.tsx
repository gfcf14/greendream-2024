import { render, screen } from '@testing-library/react';
import { ViewportProvider } from '@/context/ViewportContext';
import Card from '.';

const cardProps = {
  description: 'test description',
  icon: 'test-icon.png',
  id: 0,
  name: 'test name',
  type: 'program',
};

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Card component', () => {
  it('ensures the component renders successfully', () => {
    render(
      <ViewportProvider>
        <Card {...cardProps} isMobile />
      </ViewportProvider>,
    );

    expect(screen.getByTestId('display-toggle')).toBeInTheDocument();
    expect(screen.getByAltText('content-image').getAttribute('src')).toContain(
      encodeURIComponent(cardProps.icon),
    );
  });

  it('ensures the display toggle doesn`t render on non mobile', () => {
    render(
      <ViewportProvider>
        <Card {...cardProps} isMobile={false} />
      </ViewportProvider>,
    );

    expect(screen.queryByTestId('display-toggle')).toBeNull();
  });
});

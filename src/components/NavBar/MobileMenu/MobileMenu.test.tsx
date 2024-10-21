import { render, screen } from '@testing-library/react';
import MenuOption from '@/components/NavBar/MenuOption';
import MobileMenu from '.';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';

jest.mock('@/helpers/renderMenuOptions', () => ({
  renderMenuOptions: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const menuActions = {
  contact: jest.fn(),
};

const onClick = jest.fn();

describe('NavBar MobileMenu component', () => {
  beforeEach(() => {
    (renderMenuOptions as jest.Mock).mockClear();
    render(
      <MobileMenu
        isOpen
        menuActions={menuActions}
        menuOpacity={1}
        onClick={onClick}
      />,
    );
  });

  it('ensures renderMenuOptions gets called', () => {
    (renderMenuOptions as jest.Mock).mockReturnValue(
      <MenuOption text={'test'} />,
    );

    expect(renderMenuOptions).toHaveBeenCalled();
  });

  it('ensures the close image renders successfully', () => {
    const closeImage = screen.getByAltText('Close Mobile Menu');
    expect(closeImage).toBeInTheDocument();
    expect(closeImage).toHaveAttribute('src', '/images/icons/close.svg');
  });

  it('ensures the separators render', () => {
    expect(screen.getAllByTestId('separator')).toHaveLength(2);
  });

  it('ensures the menu option lists render', () => {
    expect(screen.getAllByTestId('mobile-menu-list')).toHaveLength(2);
  });
});

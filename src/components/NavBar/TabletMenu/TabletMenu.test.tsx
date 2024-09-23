import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '@/components/NavBar/MenuOption';
import TabletMenu from '.';
import { render, screen } from '@testing-library/react';

jest.mock('@/helpers/renderMenuOptions', () => ({
  renderMenuOptions: jest.fn(),
}));

describe('NavBar TabletMenu component', () => {
  beforeEach(() => {
    (renderMenuOptions as jest.Mock).mockClear();
    render(<TabletMenu className="open" />);
  });

  it('ensures renderMenuOptions gets called', () => {
    (renderMenuOptions as jest.Mock).mockReturnValue(
      <MenuOption text={'test'} />,
    );

    expect(renderMenuOptions).toHaveBeenCalled();
  });

  it('ensures the separators render', () => {
    expect(screen.getAllByTestId('separator')).toHaveLength(2);
  });

  it('ensures the menu option lists render', () => {
    expect(screen.getAllByTestId('tablet-menu-list')).toHaveLength(2);
  });
});
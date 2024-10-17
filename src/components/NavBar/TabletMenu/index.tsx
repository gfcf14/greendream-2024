import Separator from '@/components/Separator';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '../MenuOption';
import styles from './TabletMenu.module.css';

interface TabletMenuProps {
  className: string;
  menuOpacity: number;
}

const TabletMenu: React.FC<TabletMenuProps> = ({ className, menuOpacity }) => {
  return (
    <div
      className={styles[className]}
      data-testid="tablet-menu-section"
      id={styles['tablet-menu']}
      style={{ opacity: menuOpacity }}
    >
      <Separator text="MENU" />
      <ul
        className={styles['tablet-menu-section']}
        data-testid="tablet-menu-list"
      >
        {renderMenuOptions()}
      </ul>
      <Separator text="ACTIONS" />
      <ul
        className={styles['tablet-menu-section']}
        data-testid="tablet-menu-list"
      >
        <MenuOption text="CONTACT" />
      </ul>
    </div>
  );
};

export default TabletMenu;

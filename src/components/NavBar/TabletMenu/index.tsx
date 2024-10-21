import Separator from '@/components/Separator';
import { menuActionsList } from '@/constants';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '../MenuOption';
import styles from './TabletMenu.module.css';

interface TabletMenuProps {
  isOpen: boolean;
  menuActions: {
    contact: () => void;
  };
  menuOpacity: number;
}

const TabletMenu: React.FC<TabletMenuProps> = ({
  isOpen,
  menuActions,
  menuOpacity,
}) => {
  const renderMenuActions = () => {
    return (
      <ul
        className={styles['tablet-menu-section']}
        data-testid="tablet-menu-list"
      >
        {menuActionsList.map((action, i) => (
          <MenuOption
            key={`action-${i}`}
            text={action.toUpperCase()}
            onClick={menuActions[action as keyof typeof menuActions]}
          />
        ))}
      </ul>
    );
  };

  return (
    <div
      className={`${isOpen ? styles.open : ''}`}
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
      {renderMenuActions()}
    </div>
  );
};

export default TabletMenu;

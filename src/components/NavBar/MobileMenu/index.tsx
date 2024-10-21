import Image from 'next/image';
import Separator from '@/components/Separator';
import { menuActionsList } from '@/constants';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '../MenuOption';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  menuActions: {
    contact: () => void;
  };
  menuOpacity: number;
  onClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  menuActions,
  menuOpacity,
  onClick,
}) => {
  const renderMenuActions = () => {
    return (
      <ul
        className={styles['mobile-menu-section']}
        data-testid="mobile-menu-list"
      >
        {menuActionsList.map((action) => (
          <MenuOption
            text={action.toUpperCase()}
            onClick={menuActions[action as keyof typeof menuActions]}
          />
        ))}
      </ul>
    );
  };

  return (
    <aside
      className={`${isOpen ? styles.open : ''}`}
      data-testid="mobile-menu-aside"
      id={styles['menu-mobile']}
      style={{ opacity: menuOpacity }}
    >
      <Image
        alt="Close Mobile Menu"
        id={styles['menu-close-mobile']}
        height={34}
        onClick={onClick}
        src="/images/icons/close.svg"
        width={34}
      />
      <Separator text="MENU" />
      <ul
        className={styles['mobile-menu-section']}
        data-testid="mobile-menu-list"
      >
        {renderMenuOptions()}
      </ul>
      <Separator text="ACTIONS" />
      {renderMenuActions()}
    </aside>
  );
};

export default MobileMenu;

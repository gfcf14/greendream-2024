import Image from 'next/image';
import Separator from '@/components/Separator';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '../MenuOption';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  className?: string;
  menuOpacity: number;
  onClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  className = '',
  menuOpacity,
  onClick,
}) => {
  return (
    <aside
      className={styles[className]}
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
      <ul
        className={styles['mobile-menu-section']}
        data-testid="mobile-menu-list"
      >
        <MenuOption text="CONTACT" />
      </ul>
    </aside>
  );
};

export default MobileMenu;

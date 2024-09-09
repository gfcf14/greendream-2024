import Image from 'next/image';
import Separator from '@/components/Separator';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '../MenuOption';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  className: string;
  onClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ className, onClick }) => {
  return (
    <aside className={styles[className]} id={styles['menu-mobile']}>
      <Image
        alt="Close Mobile Menu"
        id={styles['menu-close-mobile']}
        height={34}
        onClick={onClick}
        src="/images/close.svg"
        width={34}
      />
      <Separator text="MENU" />
      <ul className={styles['mobile-menu-section']}>{renderMenuOptions()}</ul>
      <Separator text="ACTIONS" />
      <ul className={styles['mobile-menu-section']}>
        <MenuOption text="CONTACT" />
      </ul>
    </aside>
  );
};

export default MobileMenu;

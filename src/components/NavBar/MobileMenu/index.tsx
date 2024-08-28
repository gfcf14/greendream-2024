import Image from 'next/image';
import Separator from '@/components/Separator';
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
      <ul className={styles['mobile-menu-section']}>
        <li>
          <button className={styles['menu-option']}>
            <p>PROGRAMS</p>
          </button>
        </li>
        <li>
          <button className={styles['menu-option']}>
            <p>GAMES</p>
          </button>
        </li>
        <li>
          <button className={styles['menu-option']}>
            <p>ARTICLES</p>
          </button>
        </li>
        <li>
          <button className={styles['menu-option']}>
            <p>ABOUT</p>
          </button>
        </li>
      </ul>
      <Separator text="ACTIONS" />
      <ul className={styles['mobile-menu-section']}>
        <li>
          <button className={styles['menu-option']}>
            <p>CONTACT</p>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default MobileMenu;

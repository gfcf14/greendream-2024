import Separator from '@/components/Separator';
import styles from './TabletMenu.module.css';
import MenuOption from '../MenuOption';

interface TabletMenuProps {
  className: string;
}

const TabletMenu: React.FC<TabletMenuProps> = ({ className }) => {
  return (
    <div className={styles[className]} id={styles['tablet-menu']}>
      <Separator text="MENU" />
      <ul className={styles['tablet-menu-section']}>
        <MenuOption link="/programs" text="PROGRAMS" />
        <MenuOption link="/games" text="GAMES" />
        <MenuOption link="/articles" text="ARTICLES" />
        <MenuOption link="/about" text="ABOUT" />
      </ul>
      <Separator text="ACTIONS" />
      <ul className={styles['tablet-menu-section']}>
        <MenuOption text="CONTACT" />
      </ul>
    </div>
  );
};

export default TabletMenu;

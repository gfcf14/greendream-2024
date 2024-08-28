import Separator from '@/components/Separator';
import styles from './TabletMenu.module.css';

interface TabletMenuProps {
  className: string;
}

const TabletMenu: React.FC<TabletMenuProps> = ({ className }) => {
  return (
    <div className={styles[className]} id={styles['tablet-menu']}>
      <Separator text="MENU" />
      <ul className={styles['tablet-menu-section']}>
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
      <ul className={styles['tablet-menu-section']}>
        <li>
          <button className={styles['menu-option']}>
            <p>CONTACT</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TabletMenu;

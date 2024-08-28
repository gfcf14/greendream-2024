import Button from '@/components/Button';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <li className={styles.menu}>
      <button className={styles['menu-option']}>
        <p>PROGRAMS</p>
      </button>
      <button className={styles['menu-option']}>
        <p>GAMES</p>
      </button>
      <button className={styles['menu-option']}>
        <p>ARTICLES</p>
      </button>
      <button className={styles['menu-option']}>
        <p>ABOUT</p>
      </button>
      <span className={styles.separator}></span>
      <Button action="contact" type="menu" />
    </li>
  );
};

export default Menu;

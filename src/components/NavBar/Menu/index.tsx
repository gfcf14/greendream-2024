import Button from '@/components/Button';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <ul id={styles['menu-container']}>
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
      <li>
        <span className={styles.separator}></span>
      </li>
      <li>
        <Button action="contact" type="menu" />
      </li>
    </ul>
  );
};

export default Menu;

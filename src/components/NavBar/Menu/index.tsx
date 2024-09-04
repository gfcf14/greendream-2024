import Button from '@/components/Button';
import styles from './Menu.module.css';
import MenuOption from '../MenuOption';

const Menu: React.FC = () => {
  return (
    <ul id={styles['menu-container']}>
      <MenuOption text="PROGRAMS" />
      <MenuOption text="GAMES" />
      <MenuOption text="ARTICLES" />
      <MenuOption text="ABOUT" />
      <li>
        <span className={styles.divider}></span>
      </li>
      <li>
        <Button action="contact" type="menu" />
      </li>
    </ul>
  );
};

export default Menu;

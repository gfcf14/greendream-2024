import Button from '@/components/Button';
import styles from './Menu.module.css';
import MenuOption from '../MenuOption';

const Menu: React.FC = () => {
  return (
    <ul id={styles['menu-container']}>
      <MenuOption link="/programs" text="PROGRAMS" />
      <MenuOption link="/games" text="GAMES" />
      <MenuOption link="/articles" text="ARTICLES" />
      <MenuOption link="/about" text="ABOUT" />
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

import Button from '@/components/Button';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import styles from './Menu.module.css';

const Menu: React.FC = () => {
  return (
    <ul id={styles['menu-container']}>
      {renderMenuOptions()}
      <li>
        <span role="separator" className={styles.divider}></span>
      </li>
      <li>
        <Button action="contact" type="menu" />
      </li>
    </ul>
  );
};

export default Menu;

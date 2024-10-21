import Button from '@/components/Button';
import { menuActionsList } from '@/constants';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import styles from './Menu.module.css';

interface MenuProps {
  menuActions: {
    contact: () => void;
  };
}

const Menu: React.FC<MenuProps> = ({ menuActions }) => {
  const renderMenuActions = () => {
    return menuActionsList.map((action) => (
      <li>
        <Button
          action={action}
          onClick={menuActions[action as keyof typeof menuActions]}
          type="menu"
        />
      </li>
    ));
  };

  return (
    <ul id={styles['menu-container']}>
      {renderMenuOptions()}
      <li>
        <span role="separator" className={styles.divider}></span>
      </li>
      {renderMenuActions()}
    </ul>
  );
};

export default Menu;

import Separator from '@/components/Separator';
import { renderMenuOptions } from '@/helpers/renderMenuOptions';
import MenuOption from '../MenuOption';
import styles from './TabletMenu.module.css';

interface TabletMenuProps {
  className: string;
}

const TabletMenu: React.FC<TabletMenuProps> = ({ className }) => {
  return (
    <div className={styles[className]} id={styles['tablet-menu']}>
      <Separator text="MENU" />
      <ul className={styles['tablet-menu-section']}>{renderMenuOptions()}</ul>
      <Separator text="ACTIONS" />
      <ul className={styles['tablet-menu-section']}>
        <MenuOption text="CONTACT" />
      </ul>
    </div>
  );
};

export default TabletMenu;

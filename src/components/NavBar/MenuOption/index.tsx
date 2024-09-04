import styles from './MenuOption.module.css';

interface MenuOptionProps {
  text: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ text }) => {
  return (
    <li>
      <button className={styles['menu-option']}>
        <p>{text}</p>
      </button>
    </li>
  );
};

export default MenuOption;

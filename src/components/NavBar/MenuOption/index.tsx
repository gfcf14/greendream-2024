import Link from 'next/link';
import styles from './MenuOption.module.css';

interface MenuOptionProps {
  link?: string;
  text: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({ link = '', text }) => {
  return (
    <li>
      <Link className={styles['menu-link']} href={link} passHref>
        <button className={styles['menu-option']}>
          <p>{text}</p>
        </button>
      </Link>
    </li>
  );
};

export default MenuOption;

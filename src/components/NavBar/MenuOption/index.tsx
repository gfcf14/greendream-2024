'use client';

import styles from './MenuOption.module.css';
import { useNavigation } from '@/hooks/useNavigation';

interface MenuOptionProps {
  link?: string;
  onClick?: () => void;
  text: string;
}

const MenuOption: React.FC<MenuOptionProps> = ({
  link = '',
  onClick = null,
  text,
}) => {
  const { navigate } = useNavigation();
  return (
    <li>
      <div className={styles['menu-link']} data-testid="menu-link">
        <button
          className={styles['menu-option']}
          data-testid="menu-option"
          onClick={onClick ? onClick : navigate(link)}
        >
          <p>{text}</p>
        </button>
      </div>
    </li>
  );
};

export default MenuOption;

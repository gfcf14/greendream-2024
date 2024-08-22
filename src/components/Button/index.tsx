import Image from 'next/image';
import styles from './Button.module.css';
import { buttonActionIcons } from '@/constants';

interface ButtonProps {
  action?: string;
  type: 'body' | 'menu';
};

const Button: React.FC<ButtonProps> = ({
  action = '',
  type
}) => {
  const {height, url, width } = buttonActionIcons[action] || {};

  return (
    <button className={styles[`button-${type}`]}>
      {action && (
        <Image
          alt={`action-${action}`}
          className={styles.icon}
          height={height}
          src={`/images/${url}`}
          width={width}          
        />
      )}
    </button>
  )
}

export default Button;
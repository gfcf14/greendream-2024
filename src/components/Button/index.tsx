import Image from 'next/image';
import styles from './Button.module.css';
import { buttonActionIcons } from '@/constants';

interface ButtonWithAction {
  action: string;
  text?: never;
  type: 'menu';
}

interface ButtonWithText {
  action?: never;
  text: string;
  type: 'hero' | 'primary' | 'secondary';
}

type ButtonProps = ButtonWithAction | ButtonWithText;

const Button: React.FC<ButtonProps> = ({ action = '', text = '', type }) => {
  const { height, url, width } = buttonActionIcons[action] || {};

  return (
    <button className={styles[`button-${type}`]}>
      {action ? (
        <Image
          alt={`action-${action}`}
          className={styles.icon}
          height={height}
          src={`/images/${url}`}
          width={width}
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default Button;

import Image from 'next/image';
import styles from './Button.module.css';
import { buttonActionIcons } from '@/constants';

interface ButtonCommonProps {
  onClick: () => void;
}
interface ButtonWithAction {
  action: string;
  text?: never;
  type: 'menu';
}

interface ButtonWithText {
  action?: never;
  text: string;
  type: 'card' | 'hero' | 'primary' | 'secondary';
}

type ButtonProps = (ButtonWithAction | ButtonWithText) & ButtonCommonProps;

const Button: React.FC<ButtonProps> = ({
  action = '',
  onClick,
  text = '',
  type,
}) => {
  const { height, url, width } = buttonActionIcons[action] || {};

  return (
    <button
      className={styles[`button-${type}`]}
      data-testid="button"
      onClick={onClick}
    >
      {action ? (
        <Image
          alt={`action-${action}`}
          className={styles.icon}
          height={height}
          src={`/images/icons/${url}`}
          width={width}
        />
      ) : (
        <>{text}</>
      )}
    </button>
  );
};

export default Button;

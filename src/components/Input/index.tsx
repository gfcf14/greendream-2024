import { ChangeEvent } from 'react';
import { inputIcons } from '@/constants';
import styles from './Input.module.css';

interface InputProps {
  image: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  status: string;
  value: string;
}

const Input: React.FC<InputProps> = ({
  image,
  name,
  onChange,
  placeholder,
  status,
  value,
}) => {
  return (
    <div className={styles['input-container']}>
      <input
        data-testid="input-element"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      <div className={styles['input-icon-container']}>
        <img
          alt="input-image"
          className={`${styles['input-icon']} ${styles[status]}`}
          src={`/images/icons/${inputIcons[image]}`}
        />
      </div>
    </div>
  );
};

export default Input;

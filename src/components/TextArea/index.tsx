import { ChangeEvent } from 'react';
import { inputIcons } from '@/constants';
import styles from './TextArea.module.css';

interface TextAreaProps {
  image: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  status: string;
  value: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  image,
  name,
  onChange,
  placeholder,
  status,
  value,
}) => {
  return (
    <div className={styles['textarea-container']}>
      <textarea
        data-testid="textarea-element"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <img
        alt="textarea-image"
        className={`${styles['textarea-icon']} ${styles[status]}`}
        src={`/images/icons/${inputIcons[image]}`}
      />
    </div>
  );
};

export default TextArea;

import { useFlashMessage } from '@/contexts/FlashMessageContext';
import { capitalize } from '@/helpers/capitalize';
import styles from './FlashMessage.module.css';

const FlashMessage: React.FC = () => {
  const { flashMessage } = useFlashMessage();

  const { message, type = 'success' } = flashMessage;
  const isActive = !!flashMessage.message;

  return (
    <div
      className={`${styles.wrapper} ${styles[type]} ${isActive ? styles.active : ''}`}
    >
      <div className={`${styles['icon-container']} ${styles[type]}`}>
        <img
          alt="flash-message-icon"
          className={styles['flash-icon']}
          src={`/images/icons/${type}.svg`}
        />
      </div>
      <div className={styles['text-container']}>
        <h3 className={styles['flash-header']}>{capitalize(type)}</h3>
        <p className={styles['flash-message']}>{message}</p>
      </div>
    </div>
  );
};

export default FlashMessage;

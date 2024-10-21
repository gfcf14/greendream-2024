import Button from '@/components/Button';
import styles from './Modal.module.css';

interface ModalProps {
  buttons?: Array<[string, () => void]>;
  children: React.ReactNode;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({
  buttons = null,
  children,
  description,
  isOpen,
  onClose,
  title,
}) => {
  const buttonArea = buttons ? (
    <div className={styles['modal-buttons-container']}>
      {buttons?.map((currButton, i) => {
        const [text, action] = currButton;

        return (
          <Button
            key={`modal-button-${i}`}
            onClick={action}
            text={text}
            type={i == 0 ? 'primary' : 'secondary'}
          />
        );
      })}
    </div>
  ) : null;

  return (
    <div
      className={`${styles.modal} ${isOpen ? styles.open : ''}`}
      data-testid="modal"
    >
      <div className={styles['title-container']}>
        <h3 className={styles['modal-title']} data-testid="modal-title">
          {title}
        </h3>
        <img
          alt="modal-close-image"
          className={styles['close-image']}
          src="/images/icons/close.svg"
          onClick={onClose}
        />
      </div>
      <p
        className={styles['modal-description']}
        data-testid="modal-description"
      >
        {description}
      </p>
      {children}
      {buttonArea}
    </div>
  );
};

export default Modal;

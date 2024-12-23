import Image from 'next/image';
import styles from './Overlay.module.css';

interface OverlayProps {
  isMobile: boolean;
  isModal?: boolean;
  isOpen: boolean;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({
  isMobile,
  isModal = false,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={`${isOpen ? styles.open : ''} ${isModal ? styles.modal : ''}`}
      data-testid="overlay"
      id={styles.overlay}
      onClick={onClick}
    >
      {isMobile && !isModal && (
        <Image
          alt="Single Letter Logo"
          className={`${isOpen ? styles.open : ''}`}
          height={46}
          id={styles['logo-single-letter']}
          src="/images/logo-single-letter.svg"
          width={36}
        />
      )}
    </div>
  );
};

export default Overlay;

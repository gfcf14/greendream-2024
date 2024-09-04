import Image from 'next/image';
import styles from './Overlay.module.css';

interface OverlayProps {
  className: string;
  isMobile: boolean;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ className, isMobile, onClick }) => {
  return (
    <div className={styles[className]} id={styles.overlay} onClick={onClick}>
      {isMobile && (
        <Image
          alt="Single Letter Logo"
          className={styles[className]}
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

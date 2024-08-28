import Image from 'next/image';
import styles from './Overlay.module.css';

interface OverlayProps {
  className: string;
  onClick: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ className, onClick }) => {
  return (
    <div className={styles[className]} id={styles.overlay} onClick={onClick}>
      <Image
        alt="Single Letter Logo"
        className={styles[className]}
        height={46}
        id={styles['logo-single-letter']}
        src="/images/logo-single-letter.svg"
        width={36.32}
      />
    </div>
  );
};

export default Overlay;

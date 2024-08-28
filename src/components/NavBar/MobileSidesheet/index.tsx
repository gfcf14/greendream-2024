import Image from 'next/image';
import styles from './MobileSidesheet.module.css';

interface MobileSidesheetProps {
  className: string;
  onClick: () => void;
}

const MobileSidesheet: React.FC<MobileSidesheetProps> = ({
  className,
  onClick,
}) => {
  return (
    <aside className={styles[className]} id={styles['menu-mobile']}>
      <Image
        alt="Close Mobile Menu"
        id={styles['menu-close-mobile']}
        height={34}
        onClick={onClick}
        src="/images/close.svg"
        width={34}
      />
    </aside>
  );
};

export default MobileSidesheet;

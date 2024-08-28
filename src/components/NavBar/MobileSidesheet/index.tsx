import Image from 'next/image';
import styles from './MobileSidesheet.module.css';
import Separator from './Separator';

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
      <Separator text="MENU" />
      <ul className={styles['mobile-menu-section']}>
        <li>
          <button className={styles['menu-option']}>
            <p>PROGRAMS</p>
          </button>
        </li>
        <li>
          <button className={styles['menu-option']}>
            <p>GAMES</p>
          </button>
        </li>
        <li>
          <button className={styles['menu-option']}>
            <p>ARTICLES</p>
          </button>
        </li>
        <li>
          <button className={styles['menu-option']}>
            <p>ABOUT</p>
          </button>
        </li>
      </ul>
      <Separator text="ACTIONS" />
      <ul className={styles['mobile-menu-section']}>
        <li>
          <button className={styles['menu-option']}>
            <p>CONTACT</p>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default MobileSidesheet;

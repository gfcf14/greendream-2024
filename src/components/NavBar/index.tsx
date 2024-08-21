import Image from 'next/image';
import styles from './NavBar.module.css';
import useDeviceType from '@/utils/useDeviceType';

const NavBar: React.FC = () => {
  const { isTabletOrSmaller, isDesktopOrLarger } = useDeviceType();

  console.log(isTabletOrSmaller);

  return (
    <div className={styles.container}>
      <Image
        alt='GreenDream logo'
        src='/images/logo.svg'
        width={162}
        height={46}
      />
      <Image
        alt='Sandwhich'
        className={styles.sandwhich}
        src='/images/sandwhich.svg'
        width={36}
        height={32}
      />
    </div>
  )
}

export default NavBar;
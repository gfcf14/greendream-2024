'use client';

import Image from 'next/image';
import styles from './NavBar.module.css';
import useDeviceType from '@/utils/useDeviceType';
import Button from '@/components/Button';

const NavBar: React.FC = () => {
  const { isTabletOrSmaller, isDesktopOrLarger } = useDeviceType();

  const menu = isDesktopOrLarger && (
    <li className={styles.menu}>
      <button className={styles['menu-option']}>
        PROGRAMS
      </button>
      <button className={styles['menu-option']}>
        GAMES
      </button>
      <button className={styles['menu-option']}>
        ARTICLES
      </button>
      <button className={styles['menu-option']}>
        ABOUT
      </button>
      <span className={styles.separator}></span>
      <Button action='contact' type='menu' />
    </li>
  );

  const mobileMenu = isTabletOrSmaller && (
    <li>
      <Image
        alt='Sandwhich'
        className={styles.sandwhich}
        height={32}
        src='/images/sandwhich.svg'
        width={36}        
      />
    </li>
  )


  return (
    <nav>
      <ul className={styles.container}>
        <li>
          <Image
            alt='GreenDream logo'
            height={46}
            src='/images/logo.svg'
            width={162}            
          />
        </li>
        {menu}
        {mobileMenu}
      </ul>
    </nav>
  )
}

export default NavBar;
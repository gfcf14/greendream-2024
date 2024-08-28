'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './NavBar.module.css';
import useDeviceType from '@/utils/useDeviceType';
import Button from '@/components/Button';

const NavBar: React.FC = () => {
  const { isDesktopOrLarger, isMobile, isTabletOrSmaller } = useDeviceType();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openClass = isMobileMenuOpen ? styles.open : '';

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const menu = isDesktopOrLarger && (
    <li className={styles.menu}>
      <button className={styles['menu-option']}>
        <p>PROGRAMS</p>
      </button>
      <button className={styles['menu-option']}>
        <p>GAMES</p>
      </button>
      <button className={styles['menu-option']}>
        <p>ARTICLES</p>
      </button>
      <button className={styles['menu-option']}>
        <p>ABOUT</p>
      </button>
      <span className={styles.separator}></span>
      <Button action="contact" type="menu" />
    </li>
  );

  const mobileMenu = isTabletOrSmaller && (
    <li>
      <Image
        alt="Sandwhich"
        height={32}
        id={styles.sandwhich}
        onClick={openMobileMenu}
        src="/images/sandwhich.svg"
        width={36}
      />
    </li>
  );

  const mobileSidesheet = isMobile && (
    <aside className={openClass} id={styles['menu-mobile']}>
      <Image
        alt="Close Mobile Menu"
        id={styles['menu-close-mobile']}
        height={34}
        onClick={closeMobileMenu}
        src="/images/close.svg"
        width={34}
      />
    </aside>
  );

  return (
    <>
      <div className={openClass} id={styles.overlay} onClick={closeMobileMenu}>
        <Image
          alt="Single Letter Logo"
          className={openClass}
          height={46}
          id={styles['logo-single-letter']}
          src="/images/logo-single-letter.svg"
          width={36.32}
        />
      </div>
      <nav>
        <ul className={styles.container}>
          <li>
            <Image
              alt="GreenDream logo"
              height={46}
              id={styles.logo}
              src="/images/logo.svg"
              width={162}
            />
          </li>
          {menu}
          {mobileMenu}
        </ul>
        {mobileSidesheet}
      </nav>
    </>
  );
};

export default NavBar;

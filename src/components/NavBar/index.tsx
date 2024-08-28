'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './NavBar.module.css';
import useDeviceType from '@/utils/useDeviceType';
import Overlay from './Overlay';
import Menu from './Menu';
import Sandwich from './Sandwich';
import MobileMenu from './MobileMenu';
import TabletMenu from './TabletMenu';

const NavBar: React.FC = () => {
  const { isDesktopOrLarger, isMobile, isTablet, isTabletOrSmaller } =
    useDeviceType();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openClass = isMobileMenuOpen ? 'open' : '';

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Overlay
        className={openClass}
        isMobile={isMobile}
        onClick={closeMobileMenu}
      />
      {isTablet && <TabletMenu className={openClass} />}
      <nav>
        <div className={styles.container}>
          <Image
            alt="GreenDream logo"
            height={46}
            id={styles.logo}
            src="/images/logo.svg"
            width={162}
          />
          {isDesktopOrLarger && <Menu />}
          {isTabletOrSmaller && <Sandwich onClick={openMobileMenu} />}
        </div>
        {isMobile && (
          <MobileMenu className={openClass} onClick={closeMobileMenu} />
        )}
      </nav>
    </>
  );
};

export default NavBar;

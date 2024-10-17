'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const [menuOpacity, setMenuOpacity] = useState(0);
  const openClass = isMobileMenuOpen ? 'open' : '';

  const openMobileMenu = () => {
    setMenuOpacity(1);
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setTimeout(() => setMenuOpacity(0), 300);
  };

  return (
    <>
      <Overlay
        className={openClass}
        isMobile={isMobile}
        onClick={closeMobileMenu}
      />
      {isTablet && (
        <TabletMenu className={openClass} menuOpacity={menuOpacity} />
      )}
      <nav role="navigation">
        <div className={styles.container}>
          <Link href="/">
            <Image
              alt="GreenDream logo"
              height={46}
              id={styles.logo}
              src="/images/logo.svg"
              width={162}
            />
          </Link>
          {isDesktopOrLarger && <Menu />}
          {isTabletOrSmaller && (
            <Sandwich
              className={openClass}
              onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
            />
          )}
        </div>
        {isMobile && (
          <MobileMenu
            className={openClass}
            menuOpacity={menuOpacity}
            onClick={closeMobileMenu}
          />
        )}
      </nav>
    </>
  );
};

export default NavBar;

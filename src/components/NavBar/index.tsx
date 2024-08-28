'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './NavBar.module.css';
import useDeviceType from '@/utils/useDeviceType';
import Overlay from './Overlay';
import Menu from './Menu';
import Sandwich from './Sandwich';
import MobileSidesheet from './MobileSidesheet';

const NavBar: React.FC = () => {
  const { isDesktopOrLarger, isMobile, isTabletOrSmaller } = useDeviceType();
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
      <Overlay className={openClass} onClick={closeMobileMenu} />
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
          {isDesktopOrLarger && <Menu />}
          {isTabletOrSmaller && <Sandwich onClick={openMobileMenu} />}
        </ul>
        {isMobile && (
          <MobileSidesheet className={openClass} onClick={closeMobileMenu} />
        )}
      </nav>
    </>
  );
};

export default NavBar;

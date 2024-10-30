'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/components/Contact';
import Overlay from '@/components/Overlay';
import Modal from '@/components/Modal';
import useDeviceType from '@/utils/useDeviceType';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

import Sandwich from './Sandwich';
import TabletMenu from './TabletMenu';
import styles from './NavBar.module.css';
import { useContactForm } from '@/contexts/ContactFormContext';

const NavBar: React.FC = () => {
  const { isDesktopOrLarger, isLoaded, isMobile, isTablet, isTabletOrSmaller } =
    useDeviceType();
  const { isContactFormOpen, setContactFormOpen } = useContactForm();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpacity, setMenuOpacity] = useState(0);

  const openMobileMenu = () => {
    setMenuOpacity(1);
    setMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setTimeout(() => setMenuOpacity(0), 300);
  };

  const openContactForm = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    }
    setContactFormOpen(true);
  };

  const closeContactForm = () => {
    setContactFormOpen(false);
  };

  const handleClose = () => {
    closeContactForm();
    closeMobileMenu();
  };

  const menuActions = {
    contact: openContactForm,
  };

  const menuComponent = isDesktopOrLarger ? (
    <Menu menuActions={menuActions} />
  ) : (
    <Sandwich
      isOpen={isMobileMenuOpen}
      onClick={isMobileMenuOpen ? closeMobileMenu : openMobileMenu}
    />
  );

  return (
    <>
      <Overlay
        isMobile={isMobile}
        isModal={isContactFormOpen}
        isOpen={isMobileMenuOpen || isContactFormOpen}
        onClick={handleClose}
      />
      <Modal
        description="Please fill out all the fields."
        isOpen={isContactFormOpen}
        onClose={closeContactForm}
        title="CONTACT ME"
      >
        <Contact onSubmit={closeContactForm} />
      </Modal>
      {isTablet && (
        <TabletMenu
          isOpen={isMobileMenuOpen}
          menuActions={menuActions}
          menuOpacity={menuOpacity}
        />
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
          {isLoaded && menuComponent}
        </div>
        {isMobile && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            menuActions={menuActions}
            menuOpacity={menuOpacity}
            onClick={closeMobileMenu}
          />
        )}
      </nav>
    </>
  );
};

export default NavBar;

'use client';

import { useEffect, useState } from 'react';
import Alert from '@/components/Alert';
import FlashMessage from '@/components/FlashMessage';
import NavBar from '@/components/NavBar';
import { hasCookie, setCookie } from '@/helpers/cookies';
import styles from './Page.module.css';

interface PageProps {
  children: React.ReactNode;
  isHero?: boolean;
}

const Page: React.FC<PageProps> = ({ children, isHero = false }) => {
  const [showAlert, setShowAlert] = useState(false);

  // TODO: enable only when a clear reason to store cookies comes up
  // useEffect(() => {
  //   if (!hasCookie('allow-cookies')) {
  //     setShowAlert(true);
  //   }
  // }, []);

  const handleAccept = () => {
    setCookie('allow-cookies', 'accept');
    setShowAlert(false);
  };

  const handleReject = () => {
    setCookie('allow-cookies', 'reject');
    setShowAlert(false);
  };

  return (
    <>
      <NavBar />
      <div className={isHero ? '' : styles.page} data-testid="page-content">
        {children}
      </div>
      {showAlert && (
        <Alert
          header="THIS WEBSITE USES COOKIES"
          image="cookie"
          message="By accepting, you allow cookies for a better browsing experience"
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
      <FlashMessage />
    </>
  );
};

export default Page;

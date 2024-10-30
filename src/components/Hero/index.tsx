'use client';

import { useState } from 'react';
import useDeviceType from '@/utils/useDeviceType';
import Button from '@/components/Button';
import Error from '@/components/Error';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import Overlay from '@/components/Overlay';
import Text from '@/components/Text';
import { renderLatestAssets } from '@/helpers/renderLatestAssets';
import useFetchData from '@/hooks/useFetchData';
import { LatestAsset } from '@/utils/types';
import heroBackground from 'P/images/hero-background.svg';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { isDesktopOrLarger, isMobile, isTabletOrSmaller } = useDeviceType();
  const [isShowingLatestWork, setShowingLatestWork] = useState(false);

  const {
    data: latestData,
    loading,
    error,
    refetch,
  } = useFetchData<LatestAsset[]>('/api/latest');

  const openLatestWorkModal = () => {
    setShowingLatestWork(true);
  };

  const closeLatestWorkModal = () => {
    setShowingLatestWork(false);
  };

  const latestWorkButton = (
    <Button onClick={openLatestWorkModal} text="LATEST WORK" type="hero" />
  );

  return (
    <>
      <Overlay
        isMobile={isMobile}
        isModal
        isOpen={isShowingLatestWork}
        onClick={closeLatestWorkModal}
      />
      <Modal
        description="Here are the latest programs, games, and articles in the site:"
        isOpen={isShowingLatestWork}
        onClose={closeLatestWorkModal}
        title="LATEST WORK"
      >
        {error ? (
          <Error action={refetch} />
        ) : loading ? (
          <Loader isModal />
        ) : (
          renderLatestAssets(latestData!)
        )}
      </Modal>
      <div data-testid="hero-wrapper" id={styles['hero-wrapper']}>
        <div
          id={styles.hero}
          style={{ backgroundImage: `url(${heroBackground.src})` }}
        >
          <div className={styles['hero-text-container']}>
            <Text
              content="Welcome to my website! May the software in it inspire you to create!!"
              type="hero"
            />
          </div>
          {isTabletOrSmaller && latestWorkButton}
        </div>
        {isDesktopOrLarger && latestWorkButton}
      </div>
    </>
  );
};

export default Hero;

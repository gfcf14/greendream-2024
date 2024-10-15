'use client';

import useDeviceType from '@/utils/useDeviceType';
import Button from '@/components/Button';
import Text from '@/components/Text';
import heroBackground from 'P/images/hero-background.svg';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { isDesktopOrLarger, isTabletOrSmaller } = useDeviceType();

  // TODO: implement the modal for new content
  const showNewContent = () => null;
  const whatsNewButton = (
    <Button onClick={showNewContent} type="hero" text="WHAT'S NEW?" />
  );

  return (
    <div id={styles['hero-wrapper']}>
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
        {isTabletOrSmaller && whatsNewButton}
      </div>
      {isDesktopOrLarger && whatsNewButton}
    </div>
  );
};

export default Hero;

'use client';

import useDeviceType from '@/utils/useDeviceType';
import heroBackground from 'P/images/hero-background.svg';
import Button from '../Button';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { isDesktopOrLarger, isTabletOrSmaller } = useDeviceType();

  return (
    <div id={styles['hero-wrapper']}>
      <div
        id={styles.hero}
        style={{ backgroundImage: `url(${heroBackground.src})` }}
      >
        <div className={styles['hero-text-container']}>
          <p className={styles['hero-text']}>
            Welcome to my website! May the software in it inspire you to
            create!!
          </p>
        </div>
        {isTabletOrSmaller && <Button type="hero" text="WHAT'S NEW?" />}
      </div>
      {isDesktopOrLarger && <Button type="hero" text="WHAT'S NEW?" />}
    </div>
  );
};

export default Hero;

import heroBackground from 'P/images/hero-background.svg';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <div
      id={styles.hero}
      style={{ backgroundImage: `url(${heroBackground.src})` }}
    ></div>
  );
};

export default Hero;

import Image from 'next/image';
import styles from './AssetLogo.module.css';

interface AssetLogoProps {
  icon: string;
  isCard?: boolean;
}

const AssetLogo: React.FC<AssetLogoProps> = ({ icon, isCard = false }) => {
  return (
    <Image
      alt={`content-image`}
      className={`${styles.image} ${isCard ? 'card' : ''}`}
      height={80}
      src={`/images/logos/${icon}`}
      width={80}
    />
  );
};

export default AssetLogo;
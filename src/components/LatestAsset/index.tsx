'use client';

import { capitalize } from '@/helpers/capitalize';
import { clamp } from '@/helpers/clamp';
import { useNavigation } from '@/hooks/useNavigation';
import styles from './LatestAsset.module.css';
import { openExternalLink } from '@/helpers/openExternalLink';

interface LatestAssetProps {
  icon: string;
  id?: number;
  link?: string;
  name: string;
  type: 'program' | 'game' | 'article';
}

const LatestAsset: React.FC<LatestAssetProps> = ({
  icon,
  id = '',
  link = '',
  name,
  type,
}) => {
  const { navigate } = useNavigation();

  return (
    <div
      className={styles['latest-asset-container']}
      onClick={link ? openExternalLink(link) : navigate(`/${type}s/${id}`)}
      role="button"
    >
      <img
        alt="latest-asset-image"
        className={styles.icon}
        src={type === 'article' ? icon : `/images/logos/${icon}`}
      />
      <div className={styles['text-container']}>
        <h3 className={styles.title}>{`${capitalize(type)}:`}</h3>
        <p className={styles.name}>{clamp(name)}</p>
      </div>
    </div>
  );
};

export default LatestAsset;

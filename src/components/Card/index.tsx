'use client';

import { useState } from 'react';
import Image from 'next/image';
import AssetLogo from '@/components/AssetLogo';
import Button from '@/components/Button';
import Text from '@/components/Text';
import styles from './Card.module.css';
import Link from 'next/link';

interface CardProps {
  description: string;
  icon: string;
  id: number;
  isMobile: boolean;
  name: string;
  type: string;
}

const Card: React.FC<CardProps> = ({
  description,
  icon,
  id,
  isMobile = false,
  name,
  type,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleContent = () => {
    setOpen(!isOpen);
  };

  const linkType =
    type == 'program' ? 'programs' : type == 'game' ? 'games' : 'articles';

  return (
    <div className={styles.wrapper}>
      <div className={styles['title-container']}>
        <p>{name}</p>
        {isMobile && (
          <Image
            alt={`container-button`}
            className={styles.button}
            data-testid="display-toggle"
            height={18}
            onClick={toggleContent}
            src={`/images/icons/${isOpen ? 'contract' : 'expand'}.svg`}
            width={18}
          />
        )}
      </div>
      <div
        className={`${styles['content-container']} ${isOpen ? styles.open : ''}`}
      >
        <AssetLogo icon={icon} isCard />
        <Text content={description} type="card" />
        <Link className={styles['card-link']} href={`/${linkType}/${id}`}>
          <Button text="VIEW" type="card" />
        </Link>
      </div>
    </div>
  );
};

export default Card;

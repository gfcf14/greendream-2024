'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AssetLogo from '@/components/AssetLogo';
import Button from '@/components/Button';
import Text from '@/components/Text';
import { articleCardLineHeight, articleCardTitleHPadding } from '@/constants';
import styles from './Card.module.css';
import useDeviceType from '@/utils/useDeviceType';

interface CardProps {
  description: string;
  icon: string;
  id: number;
  isMobile: boolean;
  lineCount?: number;
  name: string;
  type: string;
  url?: string;
}

const Card: React.FC<CardProps> = ({
  description,
  icon,
  id,
  isMobile = false,
  lineCount = 1,
  name,
  type,
  url = '',
}) => {
  const { isDesktopOrLarger } = useDeviceType();
  const [isOpen, setOpen] = useState(false);

  const toggleContent = () => {
    setOpen(!isOpen);
  };

  const linkType =
    type == 'program' ? 'programs' : type == 'game' ? 'games' : 'articles';

  const titleHeight = `${lineCount * articleCardLineHeight + articleCardTitleHPadding}px`;
  return (
    <div className={styles.wrapper}>
      <div
        className={styles['title-container']}
        style={isDesktopOrLarger ? { height: titleHeight } : {}}
      >
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
        style={
          isDesktopOrLarger ? { height: `calc(100% - ${titleHeight})` } : {}
        }
      >
        <AssetLogo icon={icon} isCard />
        <Text content={description} type="card" />
        <Link
          className={styles['card-link']}
          href={url || `/${linkType}/${id}`}
          target={url ? '_blank' : '_self'}
        >
          <Button text="VIEW" type="card" />
        </Link>
      </div>
    </div>
  );
};

export default Card;

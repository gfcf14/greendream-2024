'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Text from '@/components/Text';
import styles from './Card.module.css';

interface CardProps {
  description: string;
  icon: string;
  id: number;
  isMobile: boolean;
  name: string;
}

const Card: React.FC<CardProps> = ({
  description,
  icon,
  id,
  isMobile = false,
  name,
}) => {
  const [isOpen, setOpen] = useState(false);

  const toggleContent = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles['title-container']}>
        <p>{name}</p>
        {isMobile && (
          <Image
            alt={`container-button`}
            className={styles.button}
            height={18}
            onClick={toggleContent}
            src={`/images/${isOpen ? 'contract' : 'expand'}.svg`}
            width={18}
          />
        )}
      </div>
      <div
        className={`${styles['content-container']} ${isOpen ? styles.open : ''}`}
      >
        <Image
          alt={`content-image`}
          className={styles.image}
          height={80}
          src={`/images/${icon}`}
          width={80}
        />
        <Text content={description} type="card" />
        <Button text="VIEW" type="card" />
      </div>
    </div>
  );
};

export default Card;

'use client';

import Button from '@/components/Button';
import Text from '@/components/Text';
import { alertImages } from '@/constants';
import useDeviceType from '@/utils/useDeviceType';
import styles from './Alert.module.css';

interface AlertProps {
  header: string;
  image: string;
  message: string;
  onAccept: () => void;
  onReject?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  header,
  image,
  message,
  onAccept,
  onReject = null,
}) => {
  const { isTabletOrLarger } = useDeviceType();

  return (
    <div id={styles.cover}>
      <div id={styles.wrapper}>
        {isTabletOrLarger && (
          <img
            alt="alert-image"
            className={styles.image}
            src={alertImages[image]}
          />
        )}
        <div className={styles['content-container']}>
          <div className={styles['text-container']}>
            <Text content={header} type="header" />
            <Text content={message} type="message" />
          </div>
          <div className={styles['button-container']}>
            <Button contained onClick={onAccept} text="ACCEPT" type="primary" />
            {onReject && (
              <Button
                contained
                onClick={onReject}
                text="REJECT"
                type="secondary"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

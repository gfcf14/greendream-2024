import Button from '@/components/Button';
import styles from './AssetButton.module.css';

interface AssetButtonProps {
  isDownload: boolean;
  link: string;
}

const AssetButton: React.FC<AssetButtonProps> = ({ isDownload, link }) => {
  return (
    <a
      data-testid="asset-button-link"
      href={link}
      id={styles.link}
      target="_blank"
      download={isDownload ? true : undefined}
    >
      <Button text={isDownload ? 'DOWNLOAD' : 'VIEW'} type="primary" />
    </a>
  );
};

export default AssetButton;

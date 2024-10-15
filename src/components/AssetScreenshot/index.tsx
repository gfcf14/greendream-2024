import styles from './AssetScreenshot.module.css';

interface AssetScreenshotProps {
  file: string;
}

const AssetScreenshot: React.FC<AssetScreenshotProps> = ({ file }) => {
  return (
    <div
      data-testid="asset-screenshot"
      id={styles.image}
      style={{ backgroundImage: `url(/images/screenshots/${file})` }}
    />
  );
};

export default AssetScreenshot;

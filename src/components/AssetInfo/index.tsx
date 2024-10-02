import styles from './AssetInfo.module.css';

interface AssetInfoProps {
  children: React.ReactNode;
}

const AssetInfo: React.FC<AssetInfoProps> = ({ children }) => {
  return (
    <div className={styles.wrapper} data-testid="asset-info-wrapper">
      {children}
    </div>
  );
};

export default AssetInfo;

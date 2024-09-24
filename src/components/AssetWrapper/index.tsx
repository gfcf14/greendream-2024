import styles from './AssetWrapper.module.css';

interface AssetWrapperProps {
  children: React.ReactNode;
}

const AssetWrapper: React.FC<AssetWrapperProps> = ({ children }) => {
  return (
    <div data-testid="asset-wrapper" id={styles['asset-wrapper']}>
      {children}
    </div>
  );
};

export default AssetWrapper;

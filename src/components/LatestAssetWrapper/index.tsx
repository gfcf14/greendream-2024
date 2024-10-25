import styles from './LatestAssetWrapper.module.css';

interface LatestAssetWrapperProps {
  children: React.ReactNode;
}

const LatestAssetWrapper: React.FC<LatestAssetWrapperProps> = ({
  children,
}) => {
  return (
    <div className={styles.wrapper} data-testid="latest-asset-wrapper">
      {children}
    </div>
  );
};

export default LatestAssetWrapper;

import styles from './Loader.module.css';

interface LoaderProps {
  isModal?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isModal = false }) => {
  return (
    <div data-testid="loader" id={styles.loader}>
      <div
        className={`${styles['triple-spinner']} ${isModal ? styles.modal : ''}`}
        data-testid="triple-spinner"
      ></div>
    </div>
  );
};

export default Loader;

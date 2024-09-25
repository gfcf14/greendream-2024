import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div data-testid="loader" id={styles.loader}>
      <div
        className={styles['triple-spinner']}
        data-testid="triple-spinner"
      ></div>
    </div>
  );
};

export default Loader;

import styles from './Sandwich.module.css';

interface SandwichProps {
  className: string;
  onClick: () => void;
}

const Sandwich: React.FC<SandwichProps> = ({ className, onClick }) => {
  return (
    <div data-testid="sandwich-button" id={styles.wrapper} onClick={onClick}>
      <div id={styles.container}>
        <div className={styles[className]} id={styles.burger}>
          <span data-testid="burger-span"></span>
          <span data-testid="burger-span"></span>
          <span data-testid="burger-span"></span>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;

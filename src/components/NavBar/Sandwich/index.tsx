import styles from './Sandwich.module.css';

interface SandwichProps {
  isOpen: boolean;
  onClick: () => void;
}

const Sandwich: React.FC<SandwichProps> = ({ isOpen, onClick }) => {
  return (
    <div data-testid="sandwich-button" id={styles.wrapper} onClick={onClick}>
      <div id={styles.container}>
        <div className={`${isOpen ? styles.open : ''}`} id={styles.burger}>
          <span data-testid="burger-span"></span>
          <span data-testid="burger-span"></span>
          <span data-testid="burger-span"></span>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;

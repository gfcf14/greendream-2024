import styles from './Sandwich.module.css';

interface SandwichProps {
  className: string;
  onClick: () => void;
}

const Sandwich: React.FC<SandwichProps> = ({ className, onClick }) => {
  return (
    <div id={styles.wrapper} onClick={onClick}>
      <div id={styles.container}>
        <div className={styles[className]} id={styles.burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Sandwich;

import Image from 'next/image';
import styles from './Sandwich.module.css';

interface SandwichProps {
  onClick: () => void;
}

const Sandwich: React.FC<SandwichProps> = ({ onClick }) => {
  return (
    <Image
      alt="Sandwich"
      height={32}
      id={styles.sandwich}
      onClick={onClick}
      src="/images/sandwich.svg"
      width={36}
    />
  );
};

export default Sandwich;
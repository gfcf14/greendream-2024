import styles from './Separator.module.css';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ text }) => {
  return <h6 className={styles.separator}>{text}</h6>;
};

export default Separator;

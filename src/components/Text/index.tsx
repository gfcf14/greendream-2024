import styles from './Text.module.css';

interface TextProps {
  content: string;
  type: 'body' | 'card' | 'hero' | 'modal' | 'title';
}

const Text: React.FC<TextProps> = ({ content, type }) => {
  return type === 'title' ? (
    <h3 className={styles[type]}>{content}</h3>
  ) : (
    <p className={styles[type]}>{content}</p>
  );
};

export default Text;

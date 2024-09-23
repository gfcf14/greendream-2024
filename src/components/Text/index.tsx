import styles from './Text.module.css';

interface TextProps {
  content: string;
  type: 'body' | 'card' | 'hero' | 'modal' | 'title';
}

const Text: React.FC<TextProps> = ({ content, type }) => {
  return type === 'title' ? (
    <h3 className={styles[type]} data-testid="text-title">
      {content}
    </h3>
  ) : (
    <p className={styles[type]} data-testid="text-body">
      {content}
    </p>
  );
};

export default Text;

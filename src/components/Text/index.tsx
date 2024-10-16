import styles from './Text.module.css';

interface TextProps {
  content: string;
  contained?: boolean;
  type:
    | 'body'
    | 'card'
    | 'external-link'
    | 'header'
    | 'hero'
    | 'highlight'
    | 'message'
    | 'modal'
    | 'title';
  white?: boolean;
}

const headerTypes = ['header', 'title'];

const Text: React.FC<TextProps> = ({
  content,
  contained = false,
  type,
  white = false,
}) => {
  return headerTypes.includes(type) ? (
    <h3
      className={`${styles[type]} ${contained ? styles.contained : ''} ${white ? styles.white : ''}`}
      data-testid="text-title"
    >
      {content}
    </h3>
  ) : (
    <p
      className={`${styles[type]} ${contained ? styles.contained : ''} ${white ? styles.white : ''}`}
      data-testid="text-body"
    >
      {content}
    </p>
  );
};

export default Text;

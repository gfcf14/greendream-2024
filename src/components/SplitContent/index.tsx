import Text from '@/components/Text';
import styles from './SplitContent.module.css';

interface SplitContentProps {
  boundless?: boolean;
  image: string;
  imageFirst?: boolean;
  rounded?: boolean;
  text: string;
}

const SplitContent: React.FC<SplitContentProps> = ({
  boundless = false,
  image,
  imageFirst = false,
  rounded = false,
  text,
}) => {
  const textComponent = (
    <div className={styles['text-container']}>
      <Text contained content={text} type="body" />
    </div>
  );

  const imageComponent = (
    <div className={styles['image-container']}>
      <img
        alt="content-image"
        className={`${rounded ? styles.rounded : ''} ${boundless ? styles.boundless : ''}`}
        src={image}
      />
    </div>
  );

  const content = imageFirst ? (
    <>
      {imageComponent}
      {textComponent}
    </>
  ) : (
    <>
      {textComponent}
      {imageComponent}
    </>
  );

  return (
    <div className={styles.wrapper} data-testid="split-content-wrapper">
      {content}
    </div>
  );
};

export default SplitContent;

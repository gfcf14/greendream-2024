import Link from 'next/link';
import Text from '@/components/Text';
import styles from './ExtrenalLink.module.css';

interface ExternalLinkProps {
  logo?: string;
  text: string;
  url: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  logo = '',
  text,
  url,
}) => {
  return (
    <Link
      data-testid="external-link-wrapper"
      className={styles.wrapper}
      href={url}
      target="_blank"
    >
      {logo && (
        <img
          alt="external-link-logo"
          className={styles.logo}
          src={`/images/site-logos/${logo}`}
        />
      )}
      <div className={styles.container}>
        <Text content={text} type="external-link" />
        <img
          alt="external-link-icon"
          className={styles.icon}
          src="/images/icons/external.svg"
        />
      </div>
    </Link>
  );
};

export default ExternalLink;

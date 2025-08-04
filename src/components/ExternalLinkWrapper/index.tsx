import styles from './ExternalLinkWrapper.module.css';

interface ExternalLinkWrapperProps {
  children: React.ReactNode;
  linkCount: number;
  type: 'comic' | 'creative' | 'professional';
}

const ExternalLinkWrapper: React.FC<ExternalLinkWrapperProps> = ({
  children,
  linkCount,
  type,
}) => {
  let groupingType = '';

  if (linkCount % 3 === 0 && linkCount % 4 !== 0) {
    groupingType = 'triples';
  } else if (linkCount % 2 === 0) {
    groupingType = 'doubles';
  }

  return (
    <div
      className={`${styles['external-link-wrapper']} ${styles[type]} ${groupingType !== '' ? styles[groupingType] : ''}`}
      data-testid={`external-${type}-links-wrapper`}
    >
      {children}
    </div>
  );
};

export default ExternalLinkWrapper;

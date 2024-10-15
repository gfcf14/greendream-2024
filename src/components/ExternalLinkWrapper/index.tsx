import styles from './ExternalLinkWrapper.module.css';

interface ExternalLinkWrapperProps {
  children: React.ReactNode;
  type: 'comic' | 'creative' | 'professional';
}

const ExternalLinkWrapper: React.FC<ExternalLinkWrapperProps> = ({
  children,
  type,
}) => {
  return (
    <div
      className={`${styles['external-link-wrapper']} ${styles[type]}`}
      data-testid={`external-${type}-links-wrapper`}
    >
      {children}
    </div>
  );
};

export default ExternalLinkWrapper;

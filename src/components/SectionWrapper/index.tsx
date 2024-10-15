import styles from './SectionWrapper.module.css';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return (
    <div className={styles['section-wrapper']} data-testid="section-wrapper">
      {children}
    </div>
  );
};

export default SectionWrapper;

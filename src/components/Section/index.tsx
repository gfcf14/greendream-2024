import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, fullWidth = false }) => {
  return (
    <div
      className={`${styles.section} ${fullWidth ? styles['full-width'] : ''}`}
      data-testid="section"
    >
      {children}
    </div>
  );
};

export default Section;

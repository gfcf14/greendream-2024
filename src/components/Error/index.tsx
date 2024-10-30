import Button from '@/components/Button';
import Text from '@/components/Text';
import styles from './Error.module.css';

interface ErrorProps {
  action: () => void;
}

const Error: React.FC<ErrorProps> = ({ action }) => {
  return (
    <div className={styles.container}>
      <Text content="An error has occurred. Please try again." type="error" />
      <Button onClick={action} text="RETRY" type="warning" />
    </div>
  );
};

export default Error;

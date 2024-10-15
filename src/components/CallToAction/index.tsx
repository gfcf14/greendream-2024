import Button from '@/components/Button';
import Text from '@/components/Text';
import { contact } from '@/helpers/contact';
import styles from './CallToAction.module.css';

interface CallToActionProps {
  text: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ text }) => {
  return (
    <div className={styles.wrapper} data-testid="call-to-action-wrapper">
      <Text content={text} type="body" white></Text>
      <Button onClick={contact} text="CONTACT ME" type="primary"></Button>
    </div>
  );
};

export default CallToAction;

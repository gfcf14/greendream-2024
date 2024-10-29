import Button from '@/components/Button';
import Text from '@/components/Text';
import styles from './CallToAction.module.css';

interface CallToActionProps {
  buttonAction: () => void;
  text: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ buttonAction, text }) => {
  return (
    <div className={styles.wrapper} data-testid="call-to-action-wrapper">
      <Text content={text} type="body" white></Text>
      <Button onClick={buttonAction} text="CONTACT ME" type="primary"></Button>
    </div>
  );
};

export default CallToAction;

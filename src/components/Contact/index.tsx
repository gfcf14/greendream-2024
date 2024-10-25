import { ChangeEvent, useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import TextArea from '@/components/TextArea';
import { emailRegex } from '@/constants';
import styles from './Contact.module.css';
import { useFlashMessage } from '@/contexts/FlashMessageContext';

interface ContactProps {
  onSubmit: () => void;
}

type InputStatus = 'neutral' | 'valid' | 'invalid';
type ContactState = {
  email: {
    value: string;
    status: InputStatus;
  };
  message: {
    value: string;
    status: InputStatus;
  };
  name: {
    value: string;
    status: InputStatus;
  };
};

const initialFormState = {
  email: {
    value: '',
    status: 'neutral' as InputStatus,
  },
  message: {
    value: '',
    status: 'neutral' as InputStatus,
  },
  name: {
    value: '',
    status: 'neutral' as InputStatus,
  },
};

const Contact: React.FC<ContactProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<ContactState>(initialFormState);
  const [isSending, setSending] = useState(false);
  const { showFlashMessage } = useFlashMessage();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'email': {
        if (value === '') {
          return 'neutral';
        }

        return emailRegex.test(value) ? 'valid' : 'invalid';
      }
      case 'name':
      case 'message': {
        return value.trim() ? 'valid' : 'neutral';
      }
      default: {
        console.log(`unknown field name: ${name}, value: ${value}`);
      }
    }
  };

  const handleFieldChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: {
        value,
        status: validateField(name, value),
      },
    });
  };

  const formDisabled = !Object.values(formState).every(
    (field) => field.status === 'valid',
  );

  const submit = async () => {
    setSending(true);
    const { email, message, name } = formState;

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.value,
          message: message.value,
          name: name.value,
        }),
      });

      if (response.ok) {
        showFlashMessage('Your message was sent', 'success');
      } else {
        showFlashMessage('Please try again later', 'error');
      }

      setFormState(initialFormState);
      onSubmit();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the email.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {isSending ? (
        <Loader isModal />
      ) : (
        <div className={`${styles['contact-form-wrapper']}`}>
          <Input
            image="name"
            name="name"
            onChange={handleFieldChange}
            placeholder="Your Name"
            status={formState.name.status}
            value={formState.name.value}
          />
          <Input
            image="email"
            name="email"
            onChange={handleFieldChange}
            placeholder="Your Email"
            status={formState.email.status}
            value={formState.email.value}
          />
          <TextArea
            image="message"
            name="message"
            onChange={handleFieldChange}
            placeholder="Your Message"
            status={formState.message.status}
            value={formState.message.value}
          />
          <Button
            boundless
            contained
            disabled={formDisabled}
            onClick={submit}
            text="SEND"
            type="primary"
          />
        </div>
      )}
    </>
  );
};

export default Contact;

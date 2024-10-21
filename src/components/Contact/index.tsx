import { ChangeEvent, useState } from 'react';
import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { emailRegex } from '@/constants';
import styles from './Contact.module.css';

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

  const submit = () => {
    // TODO: implement submit to send email
    console.log(formState);
    onSubmit();
  };

  return (
    <div className={styles['contact-form-wrapper']}>
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
  );
};

export default Contact;

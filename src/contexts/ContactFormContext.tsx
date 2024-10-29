'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';

const initialContactFormState = false;

type ContactFormContextType = {
  isContactFormOpen: boolean;
  setContactFormOpen: (contactFormOpen: boolean) => void;
};

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined,
);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error('useContactForm must be used within a ContactFormProvider');
  }
  return context;
};

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isContactFormOpen, setContactFormOpen] = useState(
    initialContactFormState,
  );

  return (
    <ContactFormContext.Provider
      value={{ isContactFormOpen, setContactFormOpen }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};

'use client';

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { flashMessageFadeTime } from '@/constants';

type FlashMessageContextType = {
  flashMessage: {
    message: string;
    type: string;
  };
  showFlashMessage: (message: string, type?: string) => void;
};

const FlashMessageContext = createContext<FlashMessageContextType | undefined>(
  undefined,
);

const initialFlashMessageState = {
  message: '',
  type: '',
};

export const useFlashMessage = () => {
  const context = useContext(FlashMessageContext);
  if (!context) {
    throw new Error(
      'useFlashMessage must be used within a FlashMessageProvider',
    );
  }
  return context;
};

export const FlashMessageProvider = ({ children }: { children: ReactNode }) => {
  const [flashMessage, setFlashMessage] = useState(initialFlashMessageState);

  const showFlashMessage = (message: string, type = 'success') => {
    setFlashMessage({ message, type });
    setTimeout(
      () => setFlashMessage(initialFlashMessageState),
      flashMessageFadeTime,
    );
  };

  return (
    <FlashMessageContext.Provider value={{ flashMessage, showFlashMessage }}>
      {children}
    </FlashMessageContext.Provider>
  );
};

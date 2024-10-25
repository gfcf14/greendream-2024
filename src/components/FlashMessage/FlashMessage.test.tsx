import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  FlashMessageProvider,
  useFlashMessage,
} from '@/contexts/FlashMessageContext';
import FlashMessage from '.';

const TestComponent = () => {
  const { showFlashMessage } = useFlashMessage();

  React.useEffect(() => {
    showFlashMessage('Test Message', 'success');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

describe('FlashMessage', () => {
  test('displays flash message with correct text and type', () => {
    render(
      <FlashMessageProvider>
        <FlashMessage />
        <TestComponent />
      </FlashMessageProvider>,
    );

    expect(screen.getByText('Success')).toBeInTheDocument();
    expect(screen.getByText('Test Message')).toBeInTheDocument();

    const iconImage = screen.getByAltText(
      'flash-message-icon',
    ) as HTMLImageElement;
    expect(iconImage).toBeInTheDocument();
    expect(iconImage.src).toContain('/images/icons/success.svg');
  });
});

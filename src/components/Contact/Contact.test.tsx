import { render, screen } from '@testing-library/react';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import Contact from '.';

describe('Contact component', () => {
  it('renders the component successfully', () => {
    render(
      <FlashMessageProvider>
        <Contact onSubmit={jest.fn()} />
      </FlashMessageProvider>,
    );

    expect(screen.getAllByTestId('input-element')).toHaveLength(2);
    expect(screen.getAllByTestId('textarea-element')).toHaveLength(1);
  });
});

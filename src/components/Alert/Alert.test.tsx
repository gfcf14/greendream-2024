import { render, screen } from '@testing-library/react';
import { ViewportProvider } from '@/contexts/ViewportContext';
import Alert from '.';

describe('Alert component', () => {
  it('renders the component successfully', () => {
    render(
      <ViewportProvider>
        <Alert
          header="test header"
          image="cookie"
          message="test message"
          onAccept={jest.fn()}
        />
      </ViewportProvider>,
    );

    expect(screen.getByText(/test header/i)).toBeInTheDocument();
    expect(screen.getByText(/test message/i)).toBeInTheDocument();
    expect(screen.getByAltText('alert-image')).toHaveProperty(
      'src',
      expect.stringContaining('/images/icons/cookie.svg'),
    );
  });
});

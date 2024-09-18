import { render, screen } from '@testing-library/react';
import Text from '.';

describe('Text component', () => {
  it('renders the correct content for title type', () => {
    render(<Text content="Test Title" type="title" />);

    expect(screen.getByText('Test Title').tagName).toBe('H3');
  });

  it('renders the correct content for body type', () => {
    render(<Text content="Test Body" type="body" />);

    expect(screen.getByText('Test Body').tagName).toBe('P');
  });
});

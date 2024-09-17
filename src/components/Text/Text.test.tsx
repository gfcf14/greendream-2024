import { render, screen } from '@testing-library/react';
import Text from '@/components/Text';

describe('Text component', () => {
  it('renders the correct content for title type', () => {
    render(<Text content="Test Title" type="title" />);

    const titleElement = screen.getByText('Test Title');

    expect(titleElement.tagName).toBe('H3');
  });

  it('renders the correct content for body type', () => {
    render(<Text content="Test Body" type="body" />);

    const bodyElement = screen.getByText('Test Body');

    expect(bodyElement.tagName).toBe('P');
  });
});

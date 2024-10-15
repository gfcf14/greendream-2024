import { render, screen } from '@testing-library/react';
import CallToAction from '.';

describe('CallToAction component', () => {
  it('renders the component successfully', () => {
    const ctaText = 'test CTA text';
    render(<CallToAction text={ctaText} />);

    expect(screen.getByTestId('call-to-action-wrapper')).toBeInTheDocument();
    expect(screen.getByText(ctaText)).toBeInTheDocument();
  });
});

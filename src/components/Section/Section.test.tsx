import { render, screen } from '@testing-library/react';
import Section from '.';

describe('Section component', () => {
  it('renders the component successfully', () => {
    render(
      <Section>
        <p>test</p>
      </Section>,
    );

    expect(screen.getByTestId('section')).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });

  it('renders the component as full width successfully', () => {
    render(
      <Section fullWidth>
        <p>test</p>
      </Section>,
    );

    expect(screen.getByTestId('section')).toHaveClass('full-width');
  });
});

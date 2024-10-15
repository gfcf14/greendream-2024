import { render, screen } from '@testing-library/react';
import SectionWrapper from '.';

describe('SectionWrapper component', () => {
  it('renders the component successfully', () => {
    render(
      <SectionWrapper>
        <p>test</p>
      </SectionWrapper>,
    );

    expect(screen.getByTestId('section-wrapper')).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

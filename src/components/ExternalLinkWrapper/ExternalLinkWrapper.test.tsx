import { render, screen } from '@testing-library/react';
import ExternalLinkWrapper from '.';

describe('ExternalLinkWrapper component', () => {
  it('renders the component successfully', () => {
    const wrapperType = 'comic';

    render(
      <ExternalLinkWrapper type={wrapperType}>
        <p>test</p>
      </ExternalLinkWrapper>,
    );

    expect(
      screen.getByTestId(`external-${wrapperType}-links-wrapper`),
    ).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import ExternalLinkWrapper from '.';

describe('ExternalLinkWrapper component', () => {
  it('renders the component successfully', () => {
    const wrapperType = 'comic';

    render(
      <ExternalLinkWrapper linkCount={3} type={wrapperType}>
        <p>test</p>
      </ExternalLinkWrapper>,
    );

    const externalLinkWrapper = screen.getByTestId(
      `external-${wrapperType}-links-wrapper`,
    );

    expect(externalLinkWrapper).toBeInTheDocument();
    expect(externalLinkWrapper).toHaveClass('triples');
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
});

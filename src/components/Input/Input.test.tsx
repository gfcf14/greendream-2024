import { render, screen } from '@testing-library/react';
import Input from '.';

describe('Input component', () => {
  it('renders the component successfully', () => {
    render(
      <Input
        image="name"
        name="test name"
        onChange={jest.fn()}
        placeholder="test placeholder"
        status={'neutral'}
        value={''}
      />,
    );

    const inputElement = screen.getByTestId('input-element');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty('name', 'test name');
    expect(inputElement).toHaveProperty('placeholder', 'test placeholder');

    const inputImage = screen.getByAltText('input-image');

    expect(inputImage).toBeInTheDocument();
    expect(inputImage).toHaveClass('neutral');
    expect(inputImage).toHaveProperty(
      'src',
      expect.stringContaining('/images/icons/name.svg'),
    );
  });
});

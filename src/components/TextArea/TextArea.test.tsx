import { render, screen } from '@testing-library/react';
import TextArea from '.';

describe('TextArea component', () => {
  it('renders the component successfully', () => {
    render(
      <TextArea
        image="message"
        name="test name"
        onChange={jest.fn()}
        placeholder="test placeholder"
        status={'neutral'}
        value={''}
      />,
    );

    const inputElement = screen.getByTestId('textarea-element');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveProperty('name', 'test name');
    expect(inputElement).toHaveProperty('placeholder', 'test placeholder');

    const inputImage = screen.getByAltText('textarea-image');

    expect(inputImage).toBeInTheDocument();
    expect(inputImage).toHaveClass('neutral');
    expect(inputImage).toHaveProperty(
      'src',
      expect.stringContaining('/images/icons/message.svg'),
    );
  });
});

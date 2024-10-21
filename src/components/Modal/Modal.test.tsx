import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('Modal component', () => {
  it('renders the component successfully', () => {
    render(
      <Modal
        description="Test Description"
        isOpen
        onClose={jest.fn()}
        title="TEST TITLE"
      >
        <p>{'test content'}</p>
      </Modal>,
    );

    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const modalTitle = screen.getByTestId('modal-title');

    expect(modalTitle.tagName).toBe('H3');
    expect(modalTitle).toHaveTextContent('TEST TITLE');

    const modalDescription = screen.getByTestId('modal-description');

    expect(modalDescription.tagName).toBe('P');
    expect(modalDescription).toHaveTextContent('Test Description');

    expect(screen.getByAltText('modal-close-image')).toHaveAttribute(
      'src',
      '/images/icons/close.svg',
    );
  });
});

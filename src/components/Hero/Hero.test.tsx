import { render, screen } from '@testing-library/react';
import Hero from '.';
import useDeviceType from '@/utils/useDeviceType';

jest.mock('@/utils/useDeviceType', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Hero component', () => {
  it('renders the hero text correctly', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: true,
      isTabletOrSmaller: false,
    });

    render(<Hero />);

    const textElement = screen.getByText(
      /Welcome to my website! May the software in it inspire you to create!!/i,
    );
    expect(textElement).toBeInTheDocument();
  });

  it('renders the button on desktop screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: true,
      isTabletOrSmaller: false,
    });

    render(<Hero />);

    const button = screen.getByText("WHAT'S NEW?");
    expect(button).toBeInTheDocument();
  });

  it('renders the button on tablet or smaller screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: false,
      isTabletOrSmaller: true,
    });

    render(<Hero />);

    const button = screen.getByText("WHAT'S NEW?");
    expect(button).toBeInTheDocument();
  });

  it('does not render the desktop button when on tablet or smaller screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: false,
      isTabletOrSmaller: true,
    });

    render(<Hero />);

    const buttonElements = screen.getAllByText("WHAT'S NEW?");
    expect(buttonElements.length).toBe(1);
  });

  it('does not render the tablet button when on desktop screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: true,
      isTabletOrSmaller: false,
    });

    render(<Hero />);

    const buttonElements = screen.getAllByText("WHAT'S NEW?");
    expect(buttonElements.length).toBe(1);
  });
});

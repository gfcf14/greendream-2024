import { fireEvent, render, screen } from '@testing-library/react';
import { ContactFormProvider } from '@/contexts/ContactFormContext';
import { FlashMessageProvider } from '@/contexts/FlashMessageContext';
import useDeviceType from '@/utils/useDeviceType';
import NavBar from '.';

jest.mock('@/utils/useDeviceType', () => jest.fn());

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const component = (
  <FlashMessageProvider>
    <ContactFormProvider>
      <NavBar />
    </ContactFormProvider>
  </FlashMessageProvider>
);

describe('NavBar Component', () => {
  const mockUseDeviceType = useDeviceType as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logo correctly', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: true,
      isMobile: false,
      isTablet: false,
      isTabletOrSmaller: false,
    });

    render(component);

    const logo = screen.getByAltText('GreenDream logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the Menu on desktop', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: true,
      isMobile: false,
      isTablet: false,
      isTabletOrSmaller: false,
    });

    render(component);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the Sandwich on tablet or smaller', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: false,
      isMobile: false,
      isTablet: true,
      isTabletOrSmaller: true,
    });

    render(component);
    expect(screen.getByTestId('sandwich-button')).toBeInTheDocument();
  });

  it('opens and closes the mobile menu', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: false,
      isMobile: true,
      isTablet: false,
      isTabletOrSmaller: true,
    });

    render(component);
    const mobileMenuAside = screen.getByTestId('mobile-menu-aside');
    expect(mobileMenuAside).not.toHaveClass('open');

    fireEvent.click(screen.getByTestId('sandwich-button'));
    expect(mobileMenuAside).toHaveClass('open');

    fireEvent.click(screen.getByTestId('sandwich-button'));
    expect(mobileMenuAside).not.toHaveClass('open');
  });

  it('closes the mobile menu when clicking the overlay', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: false,
      isMobile: true,
      isTablet: false,
      isTabletOrSmaller: true,
    });

    render(component);
    const mobileMenuAside = screen.getByTestId('mobile-menu-aside');

    fireEvent.click(screen.getByTestId('sandwich-button'));
    expect(mobileMenuAside).toHaveClass('open');

    fireEvent.click(screen.getByTestId('overlay'));
    expect(mobileMenuAside).not.toHaveClass('open');
  });

  it('opens and closes the tablet menu', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: false,
      isMobile: false,
      isTablet: true,
      isTabletOrSmaller: true,
    });

    render(component);
    const tabletMenuSection = screen.getByTestId('tablet-menu-section');
    expect(tabletMenuSection).not.toHaveClass('open');

    fireEvent.click(screen.getByTestId('sandwich-button'));
    expect(tabletMenuSection).toHaveClass('open');

    fireEvent.click(screen.getByTestId('sandwich-button'));
    expect(tabletMenuSection).not.toHaveClass('open');
  });

  it('closes the tablet menu when clicking the overlay', () => {
    mockUseDeviceType.mockReturnValue({
      isDesktopOrLarger: false,
      isMobile: false,
      isTablet: true,
      isTabletOrSmaller: true,
    });

    render(component);
    const tabletMenuSection = screen.getByTestId('tablet-menu-section');

    fireEvent.click(screen.getByTestId('sandwich-button'));
    expect(tabletMenuSection).toHaveClass('open');

    fireEvent.click(screen.getByTestId('overlay'));
    expect(tabletMenuSection).not.toHaveClass('open');
  });
});

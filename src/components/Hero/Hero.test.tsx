import { render, screen, within } from '@testing-library/react';
import Hero from '.';
import useDeviceType from '@/utils/useDeviceType';

jest.mock('@/utils/useDeviceType', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockLatestData = [
  {
    icon: 'test-program.webp',
    id: 1,
    name: 'Test Program Name',
    type: 'program',
  },
  { icon: 'test-game.webp', id: 1, name: 'Test Game Name', type: 'game' },
  {
    icon: 'test-article.webp',
    link: 'https://www.test.com/',
    name: 'Test Program Name',
    type: 'article',
  },
];

describe('Hero component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockLatestData),
      }),
    ) as jest.Mock;
    document.cookie = 'allow-cookies=accept';
  });

  afterEach(() => {
    jest.clearAllMocks();
    document.cookie = '';
  });

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

    const button = within(screen.getByTestId('hero-wrapper')).getByText(
      'LATEST WORK',
    );
    expect(button).toBeInTheDocument();
  });

  it('renders the button on tablet or smaller screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: false,
      isTabletOrSmaller: true,
    });

    render(<Hero />);

    const button = within(screen.getByTestId('hero-wrapper')).getByText(
      'LATEST WORK',
    );
    expect(button).toBeInTheDocument();
  });

  it('does not render the desktop button when on tablet or smaller screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: false,
      isTabletOrSmaller: true,
    });

    render(<Hero />);

    const buttonElements = within(
      screen.getByTestId('hero-wrapper'),
    ).getAllByText('LATEST WORK');
    expect(buttonElements.length).toBe(1);
  });

  it('does not render the tablet button when on desktop screens', () => {
    (useDeviceType as jest.Mock).mockReturnValue({
      isDesktopOrLarger: true,
      isTabletOrSmaller: false,
    });

    render(<Hero />);

    const buttonElements = within(
      screen.getByTestId('hero-wrapper'),
    ).getAllByText('LATEST WORK');
    expect(buttonElements.length).toBe(1);
  });
});

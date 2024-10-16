import { useViewport } from '@/context/ViewportContext';

const useDeviceType = () => {
  const { width } = useViewport();

  const isMobile = width <= 768;
  const isTablet = width > 768 && width <= 1024;
  const isDesktop = width > 1024 && width <= 1440;
  const isLargeDesktop = width > 1440;
  const isTabletOrSmaller = width <= 1024;
  const isTabletOrLarger = width > 768;
  const isDesktopOrLarger = width > 1024;
  const isLargeDesktopForCards = width >= 1065;

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isTabletOrSmaller,
    isTabletOrLarger,
    isDesktopOrLarger,
    isLargeDesktopForCards,
  };
};

export default useDeviceType;

'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type ViewportContextType = {
  width: number;
  height: number;
  isLoaded: boolean;
};

const ViewportContext = createContext<ViewportContextType | undefined>(
  undefined,
);

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const [size, setSize] = useState<ViewportContextType>({
    width: 0,
    height: 0,
    isLoaded: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
          isLoaded: true,
        });
      };

      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <ViewportContext.Provider value={size}>{children}</ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error('useViewport must be used within a ViewportProvider');
  }
  return context;
};

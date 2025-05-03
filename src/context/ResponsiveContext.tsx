import React from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

interface ResponsiveContextValue {
  isMobile: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ResponsiveContext = React.createContext<ResponsiveContextValue>({
  isMobile: false,
});

export const ResponsiveProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useIsMobile();
  return <ResponsiveContext.Provider value={{ isMobile }}>{children}</ResponsiveContext.Provider>;
};

'use client';

import { createContext, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/lib/store/store';

export const GlobalContext = createContext({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => {},
  closeMobileMenu: () => {},
});

export function Providers({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <Provider store={store}>
      <GlobalContext.Provider value={{ 
        isMobileMenuOpen, 
        toggleMobileMenu,
        closeMobileMenu
      }}>
        {children}
      </GlobalContext.Provider>
    </Provider>
  );
}
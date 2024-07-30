"use client";

import { useEffect, useState } from 'react';
import { Idevice } from '@/utils/types/Idevice';

const useDeviceContext = (): Idevice => {
  const [device, setDevice] = useState<Idevice>({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  });

  const getCurrentDevice = (): Idevice => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      return {
        isMobile: width <= 767,
        isTablet: width > 767 && width < 1024,
        isDesktop: width >= 1024,
      };
    }
    return {
      isMobile: true,
      isTablet: false,
      isDesktop: false,
    };
  };

  useEffect(() => {
    setDevice(getCurrentDevice());
    const handleResize = () => setDevice(getCurrentDevice());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
};

export default useDeviceContext;

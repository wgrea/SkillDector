// src/components/layout/main-layout.tsx
import { ReactNode, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  useEffect(() => {
    // Only add touch handlers if we're on a touch device
    const isTouchDevice = () => 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      matchMedia('(pointer: coarse)').matches;

    if (!isTouchDevice()) return;

    const handleTouch = (e: TouchEvent) => {
      // Only prevent default for non-scrolling touches
      if (e.cancelable && e.touches.length === 1) {
        e.preventDefault();
      }
    };

    // Use capture phase and non-passive for better control
    document.addEventListener('touchstart', handleTouch, { 
      capture: true, 
      passive: false 
    });

    return () => {
      document.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <div className="flex flex-col max-w-screen overflow-x-hidden">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
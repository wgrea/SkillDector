// src/hooks/useAnalytics.ts
import { useContext } from 'react';
import { AnalyticsContext } from '@/components/analytics/AnalyticsProvider';

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    return { track: (event: string, properties?: Record<string, unknown>) => {
      console.warn('AnalyticsProvider missing, event not tracked:', event, properties);
    }};
  }
  return context;
};

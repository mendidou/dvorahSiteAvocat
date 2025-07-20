import { useEffect } from 'react';

export default function ColorManager() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.siteData && window.siteData.colors) {
      const colors = window.siteData.colors;
      
      // Appliquer les variables CSS
      const root = document.documentElement;
      root.style.setProperty('--primary-color', colors.primary_color || '#0ea5e9');
      root.style.setProperty('--primary-hover', colors.primary_hover || '#0284c7');
      root.style.setProperty('--primary-dark', colors.primary_dark || '#0369a1');
      root.style.setProperty('--accent-color', colors.accent_color || '#f0f9ff');
      root.style.setProperty('--text-color', colors.text_color || '#333333');
      root.style.setProperty('--background-color', colors.background_color || '#ffffff');
    }
  }, []);

  return null;
}
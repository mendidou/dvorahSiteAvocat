import { useEffect, useState } from 'react';

export default function ColorManager() {
  const [colors, setColors] = useState(null);

  const applyColors = (colorData) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', colorData.primary_color || '#0ea5e9');
      root.style.setProperty('--primary-hover', colorData.primary_hover || '#0284c7');
      root.style.setProperty('--primary-dark', colorData.primary_dark || '#0369a1');
      root.style.setProperty('--accent-color', colorData.accent_color || '#f0f9ff');
      root.style.setProperty('--text-color', colorData.text_color || '#333333');
      root.style.setProperty('--background-color', colorData.background_color || '#ffffff');
    }
  };

  const fetchColors = async () => {
    try {
      const response = await fetch('/api/colors');
      const colorData = await response.json();
      setColors(colorData);
      applyColors(colorData);
    } catch (error) {
      console.warn('Failed to fetch colors, using fallback from siteData');
      // Fallback vers siteData si l'API échoue
      if (typeof window !== 'undefined' && window.siteData && window.siteData.colors) {
        const fallbackColors = window.siteData.colors;
        setColors(fallbackColors);
        applyColors(fallbackColors);
      }
    }
  };

  useEffect(() => {
    fetchColors();
    
    // Vérifie les nouvelles couleurs toutes les 30 secondes
    const interval = setInterval(fetchColors, 30000);
    
    // Écoute les changements de visibilité de la page pour rafraîchir
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchColors();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
}
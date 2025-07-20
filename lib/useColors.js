import { useState, useEffect, useCallback } from 'react';

export function useColors() {
  const [colors, setColors] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchColors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/colors');
      const colorData = await response.json();
      setColors(colorData);
      return colorData;
    } catch (error) {
      console.warn('Failed to fetch colors:', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);

  return {
    colors,
    loading,
    refreshColors: fetchColors
  };
}

// Fonction globale pour rafraîchir les couleurs
export const refreshColors = async () => {
  try {
    const response = await fetch('/api/colors');
    const colorData = await response.json();
    
    // Appliquer directement les couleurs
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--primary-color', colorData.primary_color || '#0ea5e9');
      root.style.setProperty('--primary-hover', colorData.primary_hover || '#0284c7');
      root.style.setProperty('--primary-dark', colorData.primary_dark || '#0369a1');
      root.style.setProperty('--accent-color', colorData.accent_color || '#f0f9ff');
      root.style.setProperty('--text-color', colorData.text_color || '#333333');
      root.style.setProperty('--background-color', colorData.background_color || '#ffffff');
      
      // Déclencher un événement personnalisé pour notifier les autres composants
      window.dispatchEvent(new CustomEvent('colorsUpdated', { detail: colorData }));
    }
    
    return colorData;
  } catch (error) {
    console.warn('Failed to refresh colors:', error);
    return null;
  }
};
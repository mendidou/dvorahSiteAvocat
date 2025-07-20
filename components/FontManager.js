import { useEffect } from 'react';

export default function FontManager() {
  const applyFonts = (fontData) => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      
      // Appliquer les variables CSS pour les polices
      root.style.setProperty('--font-heading', `"${fontData.heading_font || 'Inter'}", sans-serif`);
      root.style.setProperty('--font-body', `"${fontData.body_font || 'Inter'}", sans-serif`);
      root.style.setProperty('--font-accent', `"${fontData.accent_font || 'Playfair Display'}", serif`);
      
      // Mettre à jour l'import Google Fonts dans le head
      updateGoogleFontsLink(fontData);
    }
  };

  const updateGoogleFontsLink = (fontData) => {
    // Supprimer l'ancien lien Google Fonts s'il existe
    const existingLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    if (existingLink) {
      existingLink.remove();
    }
    
    // Créer le nouveau lien Google Fonts
    const googleFontsUrl = generateGoogleFontsUrl(fontData);
    const link = document.createElement('link');
    link.href = googleFontsUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    console.log('🔤 Google Fonts URL mis à jour:', googleFontsUrl);
  };

  const generateGoogleFontsUrl = (fonts) => {
    const families = [];
    
    // Police des titres
    if (fonts.heading_font && fonts.heading_font !== 'Arial' && fonts.heading_font !== 'Georgia') {
      const weights = fonts.heading_weights || '400,600,700';
      families.push(`${encodeURIComponent(fonts.heading_font)}:wght@${weights}`);
    }
    
    // Police du texte (si différente des titres)
    if (fonts.body_font && fonts.body_font !== fonts.heading_font && fonts.body_font !== 'Arial') {
      const weights = fonts.body_weights || '400,500';
      families.push(`${encodeURIComponent(fonts.body_font)}:wght@${weights}`);
    }
    
    // Police d'accent (si différente des autres)
    if (fonts.accent_font && 
        fonts.accent_font !== fonts.heading_font && 
        fonts.accent_font !== fonts.body_font) {
      const weights = '400,700';
      families.push(`${encodeURIComponent(fonts.accent_font)}:wght@${weights}`);
    }
    
    return families.length > 0 
      ? `https://fonts.googleapis.com/css2?${families.map(f => `family=${f}`).join('&')}&display=swap`
      : 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  };

  const fetchFonts = async () => {
    try {
      console.log('🔤 Fetching fonts from API...');
      const response = await fetch('/api/fonts');
      const fontData = await response.json();
      console.log('🔤 Fonts received:', fontData);
      applyFonts(fontData);
      console.log('🔤 Fonts applied to CSS variables');
    } catch (error) {
      console.warn('Failed to fetch fonts, using fallback');
      // Fallback vers les polices par défaut
      const fallbackFonts = {
        heading_font: 'Inter',
        body_font: 'Inter',
        accent_font: 'Playfair Display',
        heading_weights: '400,600,700',
        body_weights: '400,500'
      };
      applyFonts(fallbackFonts);
    }
  };

  useEffect(() => {
    fetchFonts();
    
    // Vérifie les nouvelles polices toutes les 30 secondes
    const interval = setInterval(fetchFonts, 30000);
    
    // Écoute les changements de visibilité de la page pour rafraîchir
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchFonts();
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
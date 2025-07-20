export function getColors() {
  // Couleurs par défaut
  return {
    primary_color: '#0ea5e9',
    primary_hover: '#0284c7',
    primary_dark: '#0369a1',
    accent_color: '#f0f9ff',
    text_color: '#333333',
    background_color: '#ffffff'
  };
}

export function generateDynamicCSS(colors) {
  return `
    :root {
      --primary-color: ${colors.primary_color};
      --primary-hover: ${colors.primary_hover};
      --primary-dark: ${colors.primary_dark};
      --accent-color: ${colors.accent_color};
      --text-color: ${colors.text_color};
      --background-color: ${colors.background_color};
    }
    
    .bg-primary { background-color: var(--primary-color) !important; }
    .bg-primary-hover:hover { background-color: var(--primary-hover) !important; }
    .bg-primary-dark { background-color: var(--primary-dark) !important; }
    .bg-accent { background-color: var(--accent-color) !important; }
    .text-primary { color: var(--primary-color) !important; }
    .text-custom { color: var(--text-color) !important; }
    .border-primary { border-color: var(--primary-color) !important; }
  `;
}
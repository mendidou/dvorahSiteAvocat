const fs = require('fs');
let yaml;
try {
  yaml = require('js-yaml');
} catch (e) {
  console.log('js-yaml not available, using simple YAML parser');
}

// Script pour générer les couleurs CSS à partir du YAML
function generateColorCSS() {
  try {
    // Lire le fichier colors.yml
    const colorsYaml = fs.readFileSync('./data/colors.yml', 'utf8');
    
    // Parse YAML simple (fallback si js-yaml n'est pas disponible)
    let colors;
    if (yaml) {
      colors = yaml.load(colorsYaml);
    } else {
      // Parser YAML simple pour les couleurs
      colors = {};
      const lines = colorsYaml.split('\n');
      for (const line of lines) {
        const match = line.match(/^(\w+):\s*["']?([^"']+)["']?$/);
        if (match) {
          colors[match[1]] = match[2];
        }
      }
    }
    
    // Fonction pour convertir hex en rgba
    function hexToRgba(hex, opacity) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    // Générer le CSS avec les variables
    const css = `
/* Variables CSS générées automatiquement depuis data/colors.yml */
:root {
  --primary-color: ${colors.primary_color || '#0ea5e9'};
  --primary-hover: ${colors.primary_hover || '#0284c7'};
  --primary-dark: ${colors.primary_dark || '#0369a1'};
  --accent-color: ${colors.accent_color || '#f0f9ff'};
  --text-color: ${colors.text_color || '#333333'};
  --background-color: ${colors.background_color || '#ffffff'};
  --primary-color-10: ${hexToRgba(colors.primary_color || '#0ea5e9', 0.1)};
}

/* Classes de couleurs dynamiques */
.text-primary { color: var(--primary-color) !important; }
.bg-primary { background-color: var(--primary-color) !important; }
.bg-primary-hover { background-color: var(--primary-hover) !important; }
.bg-primary-dark { background-color: var(--primary-dark) !important; }
.border-primary { border-color: var(--primary-color) !important; }
.hover\\:text-primary:hover { color: var(--primary-color) !important; }
.hover\\:bg-primary-hover:hover { background-color: var(--primary-hover) !important; }
.hover\\:text-primary:hover { color: var(--primary-color) !important; }
.focus\\:ring-primary:focus { 
  outline: none !important; 
  box-shadow: 0 0 0 3px var(--primary-color-10) !important; 
  border-color: var(--primary-color) !important; 
}

/* Classes spécifiques pour index.html */
.text-dynamic { color: var(--text-color); }
.text-secondary { color: #6b7280; }
.text-light { color: #9ca3af; }
.bg-dynamic { background-color: var(--background-color); }
.bg-section { background-color: var(--accent-color); }
.border-light { border-color: #e5e7eb; }
.border-lighter { border-color: #f3f4f6; }
.bg-footer { background-color: var(--primary-dark); }
.text-footer { color: white; }
.text-footer-light { color: rgba(255, 255, 255, 0.7); }
.border-footer { border-color: rgba(255, 255, 255, 0.1); }
.hover-text-white:hover { color: white; }
.hover-text-primary:hover { color: var(--primary-color); }
.hover-bg-primary:hover { background-color: var(--primary-color); }
.hover-bg-primary-hover:hover { background-color: var(--primary-hover); }
.icon-bg { background-color: var(--primary-color-10); }
.accent-blue { color: var(--primary-color); }
.bg-accent-blue { background-color: var(--primary-color); }
.border-accent-blue { border-color: var(--primary-color); }
.focus-ring-primary:focus { 
  outline: none; 
  box-shadow: 0 0 0 3px var(--primary-color-10); 
  border-color: var(--primary-color); 
}

/* Gradient backgrounds */
.from-primary-dark { --tw-gradient-from: var(--primary-dark) !important; }
.to-primary { --tw-gradient-to: var(--primary-color) !important; }
`;

    // Écrire le fichier CSS
    fs.writeFileSync('./colors.css', css);
    console.log('✅ colors.css généré avec succès !');
    console.log('🎨 Couleurs appliquées:', colors);
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération du CSS:', error);
  }
}

// Exécuter le script
if (require.main === module) {
  generateColorCSS();
}

module.exports = generateColorCSS;
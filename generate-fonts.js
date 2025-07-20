const fs = require('fs');
let yaml;
try {
  yaml = require('js-yaml');
} catch (e) {
  console.log('js-yaml not available, using simple YAML parser');
}

// Script pour générer les polices Google Fonts à partir du YAML
function generateFontsCSS() {
  try {
    // Lire le fichier fonts.yml
    const fontsYaml = fs.readFileSync('./data/fonts.yml', 'utf8');
    
    // Parse YAML simple (fallback si js-yaml n'est pas disponible)
    let fonts;
    if (yaml) {
      fonts = yaml.load(fontsYaml);
    } else {
      // Parser YAML simple pour les polices
      fonts = {};
      const lines = fontsYaml.split('\n');
      for (const line of lines) {
        const match = line.match(/^(\w+):\s*["']?([^"']+)["']?$/);
        if (match) {
          fonts[match[1]] = match[2];
        }
      }
    }
    
    // Générer l'URL Google Fonts
    const googleFontsUrl = generateGoogleFontsUrl(fonts);
    
    // Générer le CSS avec les polices
    const css = `
/* Import Google Fonts */
@import url('${googleFontsUrl}');

/* Variables CSS pour les polices */
:root {
  --font-heading: "${fonts.heading_font || 'Inter'}", sans-serif;
  --font-body: "${fonts.body_font || 'Inter'}", sans-serif;
  --font-accent: "${fonts.accent_font || 'Playfair Display'}", serif;
}

/* Classes de polices dynamiques */
.font-heading, h1, h2, h3, h4, h5, h6 { 
  font-family: var(--font-heading) !important; 
}

.font-body, body, p, span, div, label, button, input, textarea, a { 
  font-family: var(--font-body) !important; 
}

.font-accent { 
  font-family: var(--font-accent) !important; 
}

/* Poids spécifiques pour les titres */
h1 { font-weight: ${getHeadingWeight(fonts.heading_weights, 'bold')}; }
h2 { font-weight: ${getHeadingWeight(fonts.heading_weights, 'semibold')}; }
h3 { font-weight: ${getHeadingWeight(fonts.heading_weights, 'medium')}; }

/* Poids pour le texte */
body { font-weight: ${getBodyWeight(fonts.body_weights)}; }

/* Classes utilitaires */
.text-light { font-weight: 300; }
.text-normal { font-weight: 400; }
.text-medium { font-weight: 500; }
.text-semibold { font-weight: 600; }
.text-bold { font-weight: 700; }
`;

    // Écrire le fichier CSS
    fs.writeFileSync('./fonts.css', css);
    console.log('✅ fonts.css généré avec succès !');
    console.log('🔤 Polices appliquées:', {
      heading: fonts.heading_font,
      body: fonts.body_font,
      accent: fonts.accent_font
    });
    console.log('🌐 Google Fonts URL:', googleFontsUrl);
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des polices:', error);
  }
}

function generateGoogleFontsUrl(fonts) {
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
    const weights = '400,700'; // Poids par défaut pour accent
    families.push(`${encodeURIComponent(fonts.accent_font)}:wght@${weights}`);
  }
  
  return families.length > 0 
    ? `https://fonts.googleapis.com/css2?${families.map(f => `family=${f}`).join('&')}&display=swap`
    : 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
}

function getHeadingWeight(weights, type) {
  if (!weights) return type === 'bold' ? '700' : '600';
  
  const weightsArray = weights.split(',').map(w => parseInt(w.trim()));
  
  switch (type) {
    case 'bold':
      return weightsArray.find(w => w >= 700) || weightsArray[weightsArray.length - 1] || '700';
    case 'semibold':
      return weightsArray.find(w => w >= 600 && w < 700) || weightsArray[weightsArray.length - 2] || '600';
    case 'medium':
      return weightsArray.find(w => w >= 500 && w < 600) || weightsArray[1] || '500';
    default:
      return weightsArray[0] || '400';
  }
}

function getBodyWeight(weights) {
  if (!weights) return '400';
  const weightsArray = weights.split(',').map(w => parseInt(w.trim()));
  return weightsArray[0] || '400';
}

// Exécuter le script
if (require.main === module) {
  generateFontsCSS();
}

module.exports = generateFontsCSS;
const generateColors = require('./generate-colors');
const generateFonts = require('./generate-fonts');
const fs = require('fs');

// Script principal qui génère tous les styles
function generateAllStyles() {
  console.log('🎨 Génération des styles du site...\n');
  
  try {
    // Générer les couleurs
    console.log('1. Génération des couleurs...');
    generateColors();
    
    // Générer les polices
    console.log('\n2. Génération des polices...');
    generateFonts();
    
    // Combiner les deux fichiers CSS
    console.log('\n3. Combinaison des styles...');
    combineCSS();
    
    console.log('\n✅ Génération complète terminée !');
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des styles:', error);
    process.exit(1);
  }
}

function combineCSS() {
  try {
    let combinedCSS = '/* Styles générés automatiquement - Ne pas modifier */\n\n';
    
    // Lire et ajouter colors.css
    if (fs.existsSync('./colors.css')) {
      const colorsCSS = fs.readFileSync('./colors.css', 'utf8');
      combinedCSS += '/* === COULEURS === */\n' + colorsCSS + '\n\n';
    }
    
    // Lire et ajouter fonts.css
    if (fs.existsSync('./fonts.css')) {
      const fontsCSS = fs.readFileSync('./fonts.css', 'utf8');
      combinedCSS += '/* === POLICES === */\n' + fontsCSS + '\n\n';
    }
    
    // Écrire le fichier combiné
    fs.writeFileSync('./styles.css', combinedCSS);
    console.log('✅ styles.css créé avec couleurs + polices');
    
  } catch (error) {
    console.error('❌ Erreur lors de la combinaison CSS:', error);
  }
}

// Exécuter le script
if (require.main === module) {
  generateAllStyles();
}

module.exports = generateAllStyles;
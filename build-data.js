const fs = require('fs');
const yaml = require('js-yaml');

// Fonction pour lire un fichier YAML
function readYAML(filepath) {
  try {
    return yaml.load(fs.readFileSync(filepath, 'utf8'));
  } catch (e) {
    console.log(`Warning: Could not read ${filepath}`);
    return {};
  }
}

// Lire tous les fichiers YAML
const general = readYAML('./data/general.yml');
const hero = readYAML('./data/hero.yml');
const expertise = readYAML('./data/expertise.yml');
const cabinet = readYAML('./data/cabinet.yml');
const contact = readYAML('./data/contact.yml');

// Créer l'objet de données
const siteData = {
  general,
  hero,
  expertise,
  cabinet,
  contact
};

// Générer le fichier data.js
const jsContent = `// Données du site - générées automatiquement depuis les fichiers YAML
window.siteData = ${JSON.stringify(siteData, null, 2)};`;

// Écrire le fichier
fs.writeFileSync('./data.js', jsContent);
console.log('✅ data.js généré depuis les fichiers YAML');
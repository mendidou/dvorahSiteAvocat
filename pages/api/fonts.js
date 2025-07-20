import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function handler(req, res) {
  try {
    // Lire le fichier fonts.yml
    const fontsPath = path.join(process.cwd(), 'data', 'fonts.yml');
    const fileContents = fs.readFileSync(fontsPath, 'utf8');
    const fonts = yaml.load(fileContents);
    
    // Retourner les polices avec des valeurs par défaut
    const response = {
      heading_font: fonts.heading_font || 'Inter',
      body_font: fonts.body_font || 'Inter',
      accent_font: fonts.accent_font || 'Playfair Display',
      heading_weights: fonts.heading_weights || '400,600,700',
      body_weights: fonts.body_weights || '400,500',
      heading_style: fonts.heading_style || 'normal',
      body_style: fonts.body_style || 'normal',
      accent_style: fonts.accent_style || 'normal'
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error('Error reading fonts.yml:', error);
    
    // Retourner des polices par défaut en cas d'erreur
    res.status(200).json({
      heading_font: 'Inter',
      body_font: 'Inter',
      accent_font: 'Playfair Display',
      heading_weights: '400,600,700',
      body_weights: '400,500',
      heading_style: 'normal',
      body_style: 'normal',
      accent_style: 'normal'
    });
  }
}
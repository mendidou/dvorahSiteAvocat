import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default function handler(req, res) {
  try {
    const colorsPath = path.join(process.cwd(), 'data', 'colors.yml');
    const fileContents = fs.readFileSync(colorsPath, 'utf8');
    const colors = yaml.load(fileContents);
    
    res.status(200).json(colors);
  } catch (error) {
    // Couleurs par défaut si le fichier n'existe pas
    const defaultColors = {
      primary_color: '#0ea5e9',
      primary_hover: '#0284c7',
      primary_dark: '#0369a1',
      accent_color: '#f0f9ff',
      text_color: '#333333',
      background_color: '#ffffff'
    };
    
    res.status(200).json(defaultColors);
  }
}
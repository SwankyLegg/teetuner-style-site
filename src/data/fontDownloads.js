import alegreyaZip from '../assets/fonts/Alegreya.zip?url';
import oswaldZip from '../assets/fonts/Oswald.zip?url';

/** Bundled family archives under src/assets/fonts — also on Google Fonts */
export const fontFamilyDownloads = [
  {
    name: 'Alegreya',
    zipFile: 'Alegreya.zip',
    zipUrl: alegreyaZip,
    googleFontsUrl: 'https://fonts.google.com/specimen/Alegreya',
    blurb: 'Serif family (variable + static TTFs in the archive).',
  },
  {
    name: 'Oswald',
    zipFile: 'Oswald.zip',
    zipUrl: oswaldZip,
    googleFontsUrl: 'https://fonts.google.com/specimen/Oswald',
    blurb: 'Condensed sans for display (variable + static TTFs in the archive).',
  },
];

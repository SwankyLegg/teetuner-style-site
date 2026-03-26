import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const fontUrls = {
  Alegreya: 'https://fonts.google.com/specimen/Alegreya',
  Oswald: 'https://fonts.google.com/specimen/Oswald',
};

const GetFont = ({ fontName }) => {
  const href = fontUrls[fontName];
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark hover:underline transition-colors"
    >
      <span>Google Fonts</span>
      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
    </a>
  );
};

export default GetFont;

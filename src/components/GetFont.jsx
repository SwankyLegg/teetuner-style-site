import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const GetFont = ({ fontName }) => {
  const fontUrls = {
    'Merriweather': 'https://fonts.google.com/specimen/Merriweather',
    'Merriweather Sans': 'https://fonts.google.com/specimen/Merriweather+Sans'
  };

  return (
    <a
      href={fontUrls[fontName]}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline transition-colors"
    >
      <span>Get Font</span>
      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
    </a>
  );
};

export default GetFont; 
import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const DownloadButton = ({ files, zipName, variant = 'primary', children }) => {
  const downloadZip = async () => {
    try {
      const zip = new JSZip();

      for (const file of files) {
        const response = await fetch(file.url);
        const blob = await response.blob();
        zip.file(file.name, blob);
      }

      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, zipName);
    } catch (error) {
      console.error('Error creating zip file:', error);
    }
  };

  const buttonClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    secondary: 'bg-indigo-600 hover:bg-indigo-700',
  };

  return (
    <button
      onClick={downloadZip}
      className={`w-full px-4 py-3 ${buttonClasses[variant]} text-white rounded-lg transition-colors`}
    >
      {children}
    </button>
  );
}; 
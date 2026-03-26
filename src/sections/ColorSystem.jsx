import React from 'react';
import { Section } from '../components/Section';
import MonochromaticPalette from './Palette';

export const ColorSystem = () => (
  <Section>
    <div>
      <h2 className="text-h2">Color System</h2>
      <p className="text-lead text-gray-600 mt-2">Our color system is built on a sophisticated monochromatic palette that ensures consistency and accessibility across all brand touchpoints.</p>
    </div>

    <MonochromaticPalette />

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-h4 mb-4 text-primary">Do's</h3>
        <ul className="list-disc pl-5 space-y-2 text-body">
          <li>Use primary colors for main brand elements</li>
          <li>Maintain consistent color application across platforms</li>
          <li>Follow accessibility guidelines for text contrast</li>
          <li>Use approved color combinations</li>
          <li>Keep designs clean and professional</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-h4 mb-4 text-primary">Don'ts</h3>
        <ul className="list-disc pl-5 space-y-2 text-body">
          <li>Don't use unapproved color combinations</li>
          <li>Don't alter the brand color values</li>
          <li>Don't use colors that clash with the brand palette</li>
          <li>Don't compromise legibility for aesthetics</li>
          <li>Don't use outdated color schemes</li>
        </ul>
      </div>
    </div>
  </Section>
);

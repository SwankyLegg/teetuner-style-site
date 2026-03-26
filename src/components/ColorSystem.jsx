import React from 'react';
import MonochromaticPalette from './Palette';

export const ColorSystem = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-xl font-semibold">Color System</h2>
      <p className="text-gray-600 mt-2">Our color system is built on a sophisticated monochromatic palette that ensures consistency and accessibility across all brand touchpoints.</p>
    </div>
    <MonochromaticPalette />
  </section>
); 
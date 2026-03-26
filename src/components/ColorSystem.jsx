import React from 'react';
import MonochromaticPalette from './Palette';

export const ColorSystem = () => (
  <section className="space-y-8">
    <div>
      <h2 className="text-xl font-semibold">Color System</h2>
      <p className="text-gray-600 mt-2">
        Forest greens, bright accent green, slate and red primaries, plus a full gray scale and theme previews for
        consistent UI and marketing.
      </p>
    </div>
    <MonochromaticPalette />
  </section>
); 
import React from 'react';
import { BrandValueCard } from '../components/BrandValueCard';
import { Section } from '../components/Section';

export const BrandValues = () => (
  <Section>
    <h2 className="text-h2">Brand values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <BrandValueCard
        title="Precision first"
        description="Help golfers measure, compare, and refine with data they can trust"
      />
      <BrandValueCard
        title="Radically straightforward"
        description="Clear flows and honest copy so tuning your game never feels like homework"
      />
      <BrandValueCard
        title="Confidence on every tee"
        description="A calm, modern experience that reinforces smart decisions round after round"
      />
    </div>
  </Section>
);

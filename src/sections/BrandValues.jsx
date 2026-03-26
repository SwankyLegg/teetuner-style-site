import React from 'react';
import { BrandValueCard } from '../components/BrandValueCard';
import { Section } from '../components/Section';

export const BrandValues = () => (
  <Section>
    <h2 className="text-h2">Brand Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <BrandValueCard
        title="Affordable Luxury"
        description="Premium quality and experience without unnecessary costs"
      />
      <BrandValueCard
        title="Trustworthy Partnership"
        description="Building lasting relationships through transparency and reliability"
      />
      <BrandValueCard
        title="Approachable Excellence"
        description="Maintaining high standards while remaining accessible and welcoming"
      />
    </div>
  </Section>
);

import React from 'react';

export const SectionStack = ({ children }) => (
  <div className="flex flex-col gap-8">{children}</div>
);

export const Section = ({ children }) => (
  <section className="py-16">
    <SectionStack>{children}</SectionStack>
  </section>
);

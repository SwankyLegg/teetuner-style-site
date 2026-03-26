import React from 'react';
import { Section } from '../components/Section';
import { LogoUsage } from './LogoUsage';
import { LogoGuidelines } from './LogoGuidelines';

export const LogoSection = () => (
  <Section>
    <h2 className="text-h2">Logo</h2>
    <LogoUsage />
    <LogoGuidelines />
  </Section>
);

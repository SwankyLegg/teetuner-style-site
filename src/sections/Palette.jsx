import React from 'react';
import { SectionStack } from '../components/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import ColorCard from '../components/ColorCard';

const ColorGroup = ({ title, description, colors }) => (
  <SectionStack>
    <div>
      <h3 className="text-h3">{title}</h3>
      <p className="text-lead text-gray-600">{description}</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {colors.map((color, i) => (
        <ColorCard key={i} color={color} />
      ))}
    </div>
  </SectionStack>
);

const brandGreens = [
  {
    name: 'TeeTuner Green',
    hex: '#1D4934',
    cmyk: '82, 41, 76, 52',
    pantone: 'Match to brand swatch',
    usage: 'Primary brand, social avatar background, key actions',
  },
  {
    name: 'Deep Forest',
    hex: '#163828',
    cmyk: '85, 45, 78, 58',
    pantone: 'Match to brand swatch',
    usage: 'Hover states, emphasis, dark UI surfaces',
  },
  {
    name: 'Forest 600',
    hex: '#2A5C45',
    cmyk: '75, 35, 65, 40',
    pantone: '—',
    usage: 'Secondary accents, charts, illustration',
  },
  {
    name: 'Moss Tint',
    hex: '#E8F0EC',
    cmyk: '12, 4, 10, 0',
    pantone: '—',
    usage: 'Soft backgrounds, highlights, cards',
  },
];

const neutralColors = [
  {
    name: 'Black',
    hex: '#000000',
    cmyk: '0, 0, 0, 100',
    pantone: 'Process Black C',
    usage: 'Wordmark default, high-contrast type',
  },
  {
    name: 'Charcoal',
    hex: '#2C2C2C',
    cmyk: '0, 0, 0, 83',
    pantone: 'Black 7 C',
    usage: 'Body text, dark UI chrome',
  },
  {
    name: 'Gray 600',
    hex: '#666666',
    cmyk: '0, 0, 0, 60',
    pantone: 'Cool Gray 9 C',
    usage: 'Secondary text',
  },
  {
    name: 'Gray 500',
    hex: '#808080',
    cmyk: '0, 0, 0, 50',
    pantone: 'Cool Gray 7 C',
    usage: 'Captions, placeholders',
  },
  {
    name: 'Gray 200',
    hex: '#E0E0E0',
    cmyk: '0, 0, 0, 12',
    pantone: 'Cool Gray 1 C',
    usage: 'Dividers, disabled borders',
  },
  {
    name: 'White',
    hex: '#FFFFFF',
    cmyk: '0, 0, 0, 0',
    pantone: 'N/A',
    usage: 'Inverse wordmark, light backgrounds',
  },
];

const MonochromaticPalette = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <SectionStack>
        <ColorGroup
          title="Brand greens"
          description="Core TeeTuner color built from the mark; pair with neutrals for interfaces and print"
          colors={brandGreens}
        />

        <ColorGroup
          title="Neutrals"
          description="Supporting grayscale for typography, borders, and surfaces"
          colors={neutralColors}
        />

        <Card>
          <CardHeader>
            <CardTitle>Accessibility notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-body space-y-2">
              <li>• Black (#000000) on White: high contrast for long-form text</li>
              <li>• White on TeeTuner Green (#1D4934): suitable for buttons and primary UI chrome</li>
              <li>• TeeTuner Green on White: use for large text and UI labels; verify smaller sizes with a contrast checker</li>
              <li>• Charcoal on Moss Tint: use for secondary content blocks</li>
            </ul>
          </CardContent>
        </Card>
      </SectionStack>
    </div>
  );
};

export default MonochromaticPalette;

import React from 'react';
import { SectionStack } from '../components/Section';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import ColorCard from '../components/ColorCard';

const ColorGroup = ({ title, description, colors, gridClassName = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' }) => (
  <SectionStack>
    <div>
      <h3 className="text-h3">{title}</h3>
      <p className="text-lead text-gray-600">{description}</p>
    </div>
    <div className={`grid ${gridClassName} gap-4`}>
      {colors.map((color, i) => (
        <ColorCard key={i} color={color} />
      ))}
    </div>
  </SectionStack>
);

const primaryColors = [
  {
    name: 'Forest Dark',
    hex: '#0A2B26',
    cmyk: '77, 0, 12, 83',
    pantone: 'PMS 5463 C',
    usage: 'Primary brand / light theme key UI and headlines',
  },
  {
    name: 'Navy Blue',
    hex: '#172C47',
    cmyk: '68, 38, 0, 72',
    pantone: 'PMS 2965 C',
    usage: 'Deep supporting blue-green; structural UI and contrast',
  },
  {
    name: 'Forest Medium',
    hex: '#1E493A',
    cmyk: '59, 0, 21, 71',
    pantone: 'PMS 627 C',
    usage: 'Mid forest for hover states and secondary surfaces',
  },
  {
    name: 'Forest Light',
    hex: '#346845',
    cmyk: '50, 0, 34, 59',
    pantone: 'PMS 7730 C',
    usage: 'Lighter forest; dark theme accent and paired greens',
  },
  {
    name: 'Bright Green',
    hex: '#46C162',
    cmyk: '64, 0, 49, 24',
    pantone: 'PMS 7481 C',
    usage: 'Accent / positive emphasis; dark theme primary highlight',
  },
  {
    name: 'Slate Gray',
    hex: '#707D88',
    cmyk: '18, 8, 0, 47',
    pantone: 'PMS 7543 C',
    usage: 'Muted cool neutral for secondary chrome and icons',
  },
  {
    name: 'Accent Red',
    hex: '#ED3E49',
    cmyk: '0, 74, 69, 7',
    pantone: 'PMS 1788 C',
    usage: 'Alerts, errors, and high-attention accents (use sparingly)',
  },
];

const grayscaleColors = [
  {
    name: 'White',
    hex: '#FFFFFF',
    cmyk: '0, 0, 0, 0',
    pantone: '— (unprinted / stock white)',
    usage: 'Light theme canvas, inverse type on dark fills',
  },
  {
    name: 'Gray 50',
    hex: '#FAFBFC',
    cmyk: '1, 0, 0, 1',
    pantone: 'PMS Cool Gray 1 C',
    usage: 'Soft page tint, cards',
  },
  {
    name: 'Gray 100',
    hex: '#F1F3F4',
    cmyk: '1, 0, 0, 4',
    pantone: 'PMS Cool Gray 2 C',
    usage: 'Subtle panels, table stripes',
  },
  {
    name: 'Gray 200',
    hex: '#CDD2D7',
    cmyk: '5, 2, 0, 16',
    pantone: 'PMS Cool Gray 3 C',
    usage: 'Borders, dividers, disabled strokes',
  },
  {
    name: 'Gray 300',
    hex: '#A9B1BA',
    cmyk: '9, 5, 0, 27',
    pantone: 'PMS Cool Gray 5 C',
    usage: 'Input borders, tertiary UI',
  },
  {
    name: 'Gray 400',
    hex: '#85909D',
    cmyk: '15, 8, 0, 38',
    pantone: 'PMS Cool Gray 6 C',
    usage: 'Placeholder text, icons',
  },
  {
    name: 'Gray 500',
    hex: '#677080',
    cmyk: '20, 13, 0, 50',
    pantone: 'PMS Cool Gray 8 C',
    usage: 'Secondary labels',
  },
  {
    name: 'Gray 600',
    hex: '#515963',
    cmyk: '18, 10, 0, 61',
    pantone: 'PMS Cool Gray 9 C',
    usage: 'Secondary body, metadata',
  },
  {
    name: 'Gray 700',
    hex: '#3A4046',
    cmyk: '17, 9, 0, 73',
    pantone: 'PMS Cool Gray 10 C',
    usage: 'Strong secondary text',
  },
  {
    name: 'Gray 800',
    hex: '#252A2E',
    cmyk: '20, 9, 0, 82',
    pantone: 'PMS Cool Gray 11 C',
    usage: 'Headings on light UI, dark chrome',
  },
  {
    name: 'Gray 900',
    hex: '#161A1D',
    cmyk: '24, 10, 0, 89',
    pantone: 'PMS Black 3 C',
    usage: 'Dark theme canvas, near-black surfaces',
  },
  {
    name: 'Black',
    hex: '#000000',
    cmyk: '0, 0, 0, 100',
    pantone: 'PMS Black C',
    usage: 'Light theme primary text, maximum contrast',
  },
];

const ThemePreview = ({ title, description, className, children }) => (
  <div className={`rounded-xl border border-gray-200 overflow-hidden shadow-sm ${className}`}>
    <div className="px-5 py-4 border-b border-black/10">
      <h4 className="text-h5">{title}</h4>
      <p className="text-small opacity-90 mt-1">{description}</p>
    </div>
    <div className="p-5">{children}</div>
  </div>
);

const MonochromaticPalette = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <SectionStack>
        <p className="text-small text-gray-500 max-w-3xl -mb-2">
          <strong className="font-medium text-gray-700">Pantone:</strong> IDs below are the nearest <em>Solid Coated</em>{' '}
          matches to the digital swatches—not a press guarantee. Proof with physical swatches before production.{' '}
          <strong className="font-medium text-gray-700">CMYK</strong> is converted from each hex for reference; tune with
          your printer&apos;s ICC profile.
        </p>

        <ColorGroup
          title="Primary colors"
          description="Core brand hues: forest family, bright accent green, slate, and red for system feedback"
          colors={primaryColors}
          gridClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        />

        <ColorGroup
          title="Gray scale"
          description="Twelve-step neutral ramp from white through black for UI, type, and surfaces"
          colors={grayscaleColors}
          gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />

        <SectionStack>
          <div>
            <h3 className="text-h3">Theme previews</h3>
            <p className="text-lead text-gray-600">
              Reference pairings for default light UI and an approved dark treatment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ThemePreview
              title="Light theme"
              description="Background & text: White (#FFFFFF) and Black (#000000). Primary: Forest Dark (#0A2B26). Accent: Bright Green (#46C162)."
              className="bg-white text-gray-900"
            >
              <div className="space-y-4">
                <div className="h-24 rounded-lg bg-[#0A2B26] flex items-center justify-center text-white font-medium">
                  Primary surface
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#46C162] text-black text-small font-medium">
                    Accent
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-gray-200 text-small text-gray-800">
                    Neutral chip
                  </span>
                </div>
                <p className="text-body text-black">
                  Body copy sits on white with black type; use Forest Dark for navigation and key actions, Bright
                  Green for highlights and success.
                </p>
              </div>
            </ThemePreview>

            <ThemePreview
              title="Dark theme"
              description="Background & text: Gray 900 (#161A1D) and White (#FFFFFF). Primary: Bright Green (#46C162). Accent: Forest Light (#346845)."
              className="bg-gray-900 text-white"
            >
              <div className="space-y-4">
                <div className="h-24 rounded-lg bg-[#46C162] text-[#0A2B26] flex items-center justify-center font-medium">
                  Primary highlight
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#346845] text-white text-small font-medium">
                    Accent
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-md border border-white/20 text-small text-white">
                    Neutral chip
                  </span>
                </div>
                <p className="text-body text-white/95">
                  Canvas stays Gray 900; lead with Bright Green for brand emphasis and Forest Light for secondary
                  filled elements.
                </p>
              </div>
            </ThemePreview>
          </div>
        </SectionStack>

        <Card>
          <CardHeader>
            <CardTitle>Accessibility notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-body space-y-2">
              <li>• Black (#000000) on White (#FFFFFF): preferred for long-form body text in the light theme.</li>
              <li>• White on Forest Dark (#0A2B26): suitable for primary buttons and key UI on light backgrounds.</li>
              <li>• Bright Green (#46C162): pair with Forest Dark or Black for small type; verify non-text UI with a contrast checker.</li>
              <li>• White on Gray 900 (#161A1D): base pairing for dark theme body content.</li>
              <li>• Accent Red (#ED3E49): reserve for alerts; ensure adjacent text meets WCAG for your size and weight.</li>
            </ul>
          </CardContent>
        </Card>
      </SectionStack>
    </div>
  );
};

export default MonochromaticPalette;

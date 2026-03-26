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

const slateColors = [
  {
    name: "Slate 900",
    hex: "#2C3844",
    cmyk: "67, 52, 37, 80",
    pantone: "533 C",
    usage: "Main text, icons, strong emphasis"
  },
  {
    name: "Slate 800",
    hex: "#3A4A5A",
    cmyk: "63, 47, 35, 72",
    pantone: "534 C",
    usage: "Headings, dark accents"
  },
  {
    name: "Slate 700",
    hex: "#536478",
    cmyk: "56, 40, 28, 58",
    pantone: "535 C",
    usage: "Secondary text, interactive elements"
  },
  {
    name: "Slate 600",
    hex: "#7F92A7",
    cmyk: "45, 30, 20, 35",
    pantone: "536 C",
    usage: "Primary brand color, buttons"
  },
  {
    name: "Slate 500",
    hex: "#A5B3C4",
    cmyk: "32, 20, 12, 22",
    pantone: "537 C",
    usage: "Disabled states, subtle accents"
  },
  {
    name: "Slate 400",
    hex: "#CBD5E0",
    cmyk: "20, 12, 8, 12",
    pantone: "538 C",
    usage: "Borders, dividers, light accents"
  },
  {
    name: "Slate 300",
    hex: "#EEF2F5",
    cmyk: "8, 4, 3, 5",
    pantone: "539 C",
    usage: "Backgrounds, light surfaces"
  },
  {
    name: "Slate 200",
    hex: "#F8FAFC",
    cmyk: "3, 2, 1, 0",
    pantone: "7541 C",
    usage: "Page backgrounds, hover states"
  }
];

const neutralColors = [
  {
    name: "Black",
    hex: "#000000",
    cmyk: "0, 0, 0, 100",
    pantone: "Process Black C",
    usage: "Pure black for special cases"
  },
  {
    name: "Charcoal",
    hex: "#2C2C2C",
    cmyk: "0, 0, 0, 83",
    pantone: "Black 7 C",
    usage: "Softer black for text and dark UI"
  },
  {
    name: "Gray 800",
    hex: "#424242",
    cmyk: "0, 0, 0, 74",
    pantone: "Cool Gray 11 C",
    usage: "Deep gray for rich blacks"
  },
  {
    name: "Gray 600",
    hex: "#666666",
    cmyk: "0, 0, 0, 60",
    pantone: "Cool Gray 9 C",
    usage: "Primary text color"
  },
  {
    name: "Gray 500",
    hex: "#808080",
    cmyk: "0, 0, 0, 50",
    pantone: "Cool Gray 7 C",
    usage: "Secondary text, icons"
  },
  {
    name: "Gray 400",
    hex: "#9B9B9B",
    cmyk: "0, 0, 0, 39",
    pantone: "Cool Gray 5 C",
    usage: "Disabled text, placeholders"
  },
  {
    name: "Gray 200",
    hex: "#E0E0E0",
    cmyk: "0, 0, 0, 12",
    pantone: "Cool Gray 1 C",
    usage: "Borders, dividers"
  },
  {
    name: "White",
    hex: "#FFFFFF",
    cmyk: "0, 0, 0, 0",
    pantone: "N/A",
    usage: "Pure white backgrounds"
  }
];

const MonochromaticPalette = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <SectionStack>
        <ColorGroup
          title="Slate Blues"
          description="Primary brand colors for key interface elements and emphasis"
          colors={slateColors}
        />

        <ColorGroup
          title="Neutrals"
          description="Supporting grayscale for typography and UI elements"
          colors={neutralColors}
        />

        <Card>
          <CardHeader>
            <CardTitle>Accessibility Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-body space-y-2">
              <li>• Slate 900 on White: 12:1 contrast ratio (AAA)</li>
              <li>• Gray 600 on Slate 200: 7:1 contrast ratio (AAA)</li>
              <li>• Slate 700 on White: 4.5:1 contrast ratio (AA)</li>
              <li>• White text on Slate 700: 4.5:1 contrast ratio (AA)</li>
            </ul>
          </CardContent>
        </Card>
      </SectionStack>
    </div>
  );
};

export default MonochromaticPalette;
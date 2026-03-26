import React from 'react';
import { Card, CardContent } from './ui/card';

function isLightHex(hex) {
  if (!hex || typeof hex !== 'string') return false;
  const normalized = hex.replace('#', '');
  if (normalized.length !== 6) return false;
  const n = parseInt(normalized, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.88;
}

const ColorCard = ({ color }) => {
  const [copied, setCopied] = React.useState(false);
  const [copiedValue, setCopiedValue] = React.useState('');

  const copyToClipboard = (value, label) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(label);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setCopiedValue('');
    }, 2000);
  };

  const lightSwatch = isLightHex(color.hex);

  return (
    <Card className="overflow-hidden">
      <button
        onClick={() => copyToClipboard(color.hex, 'HEX')}
        className={`w-full h-32 relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset ${
          lightSwatch ? 'ring-1 ring-inset ring-gray-200' : ''
        }`}
        style={{ backgroundColor: color.hex }}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 text-white text-body">
            Copied {copiedValue}!
          </div>
        )}
      </button>
      <CardContent className="p-4 pt-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-body font-medium">{color.name}</span>
            <code
              className="text-body cursor-pointer hover:text-primary shrink-0"
              onClick={() => copyToClipboard(color.hex, 'HEX')}
            >
              {color.hex}
            </code>
          </div>
          <div
            className="text-body text-gray-600 cursor-pointer hover:text-primary"
            onClick={() => copyToClipboard(color.cmyk, 'CMYK')}
          >
            CMYK: {color.cmyk}
          </div>
          <div
            className="text-body text-gray-600 cursor-pointer hover:text-primary"
            onClick={() => copyToClipboard(color.pantone, 'Pantone')}
          >
            Pantone: {color.pantone}
          </div>
          <p className="text-body text-gray-500">{color.usage}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorCard;

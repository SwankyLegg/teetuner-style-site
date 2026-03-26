import React from 'react';
import GetFont from '../components/GetFont';
import { Section, SectionStack } from '../components/Section';

const Typography = () => {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <SectionStack>
          <h2 className="text-h2">Typography</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-h3 font-merriweather">Merriweather</h3>
                <GetFont fontName="Merriweather" />
              </div>
              <p className="text-lead mb-6 text-gray-600">Primary Serif Typeface</p>
              <div className="space-y-4">
                <p className="font-merriweather font-light">Light (300) - Merriweather Light</p>
                <p className="font-merriweather font-normal">Regular (400) - Merriweather Regular</p>
                <p className="font-merriweather font-bold">Bold (700) - Merriweather Bold</p>
                <p className="font-merriweather font-black">Black (900) - Merriweather Black</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-h3 font-merriweather-sans">Merriweather Sans</h3>
                <GetFont fontName="Merriweather Sans" />
              </div>
              <p className="text-lead mb-6 text-gray-600">Primary Sans-Serif Typeface</p>
              <div className="space-y-4">
                <p className="font-merriweather-sans font-light">Light (300) - Merriweather Sans Light</p>
                <p className="font-merriweather-sans font-normal">Regular (400) - Merriweather Sans Regular</p>
                <p className="font-merriweather-sans font-medium">Medium (500) - Merriweather Sans Medium</p>
                <p className="font-merriweather-sans font-semibold">Semibold (600) - Merriweather Sans Semibold</p>
                <p className="font-merriweather-sans font-bold">Bold (700) - Merriweather Sans Bold</p>
              </div>
            </div>
          </div>

          <SectionStack>
            <h3 className="text-h3">Usage Guidelines</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-h4 mb-4 text-primary">Merriweather Specifications</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-h5 mb-2">Primary Uses</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Main headings and display text</li>
                    <li>Long-form content</li>
                    <li>Body text where readability is crucial</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-h5 mb-2">Size Guidelines</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Minimum size: 14px for body text</li>
                    <li>Optimal line height: 1.6</li>
                    <li>Recommended paragraph width: 45-75 characters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-h4 mb-4 text-primary">Merriweather Sans Specifications</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-h5 mb-2">Primary Uses</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>User interface elements</li>
                    <li>Navigation and buttons</li>
                    <li>Form elements and labels</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-h5 mb-2">Size Guidelines</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Minimum size: 12px for UI text</li>
                    <li>Optimal line height: 1.5</li>
                    <li>Button text: 16px recommended</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-h4 mb-4 text-primary">Type Scale</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-h5 mb-2">Heading Sizes</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>H1: 48px / 3rem</li>
                    <li>H2: 36px / 2.25rem</li>
                    <li>H3: 24px / 1.5rem</li>
                    <li>H4: 20px / 1.25rem</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-h5 mb-2">Body Text</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Large: 18px / 1.125rem</li>
                    <li>Base: 16px / 1rem</li>
                    <li>Small: 14px / 0.875rem</li>
                    <li>Caption: 12px / 0.75rem</li>
                  </ul>
                </div>
              </div>
            </div>
          </SectionStack>
        </SectionStack>
      </div>
    </Section>
  );
};

export default Typography;

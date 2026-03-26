import React from 'react';

export const LogoGuidelines = () => (
  <>
    <h3 className="text-h3">Usage Guidelines</h3>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-h4 mb-4 text-primary">Do's</h4>
        <ul className="list-disc pl-5 space-y-2 text-body">
          <li>Use the primary logo on light backgrounds when possible</li>
          <li>Maintain clear space around the logo</li>
          <li>Use approved color combinations</li>
          <li>Scale the logo proportionally</li>
          <li>Use official logo files (SVG, PNG, EPS)</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-h4 mb-4 text-primary">Don'ts</h4>
        <ul className="list-disc pl-5 space-y-2 text-body">
          <li>Don't modify the logo colors outside approved variations</li>
          <li>Don't stretch or distort the logo</li>
          <li>Don't use the logo smaller than minimum size</li>
          <li>Don't place the logo on busy backgrounds</li>
          <li>Don't recreate or modify the logo artwork</li>
        </ul>
      </div>
    </div>
  </>
);

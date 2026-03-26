import React from 'react';
import { SectionStack } from '../components/Section';
import teeTunerWordmark from '../assets/teetuner/TeeTuner.svg';
import teeTunerWordmarkWhite from '../assets/teetuner/TeeTuner_white.svg';
import teeTunerSocialMark from '../assets/teetuner/Social-TT.svg';

const btnClass =
  'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark shrink-0';

export const LogoUsage = () => {
  return (
    <SectionStack>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Wordmark</h2>
        <div className="flex flex-wrap gap-2">
          <a href={teeTunerWordmark} download="TeeTuner.svg" className={btnClass}>
            Download primary wordmark
          </a>
          <a href={teeTunerWordmarkWhite} download="TeeTuner_white.svg" className={btnClass}>
            Download inverse wordmark
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 rounded-lg bg-white border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-4">Primary wordmark (light backgrounds)</h3>
          <img src={teeTunerWordmark} alt="TeeTuner wordmark on light background" className="w-full h-auto" />
        </div>

        <div className="p-8 rounded-lg bg-black">
          <h3 className="text-sm font-medium text-gray-400 mb-4">Inverse wordmark (dark backgrounds)</h3>
          <img src={teeTunerWordmarkWhite} alt="TeeTuner wordmark on dark background" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-h4 mb-4 text-primary">Size specifications</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-h5 mb-2">Minimum sizes</h5>
            <ul className="list-disc pl-5 space-y-2 text-body">
              <li>Digital: 160px width</li>
              <li>Print: 1.25 inches width</li>
            </ul>
          </div>
          <div>
            <h5 className="text-h5 mb-2">Clear space</h5>
            <ul className="list-disc pl-5 space-y-2 text-body">
              <li>Reserve padding equal to roughly 12% of the wordmark height on all sides</li>
              <li>Do not place type, icons, or imagery inside the clear space</li>
              <li>Scale clear space proportionally when resizing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Mark &amp; social avatar</h2>
        <a href={teeTunerSocialMark} download="Social-TT.svg" className={btnClass}>
          Download mark
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
          <h3 className="sr-only">Full-color mark on white</h3>
          <img src={teeTunerSocialMark} alt="TeeTuner social mark on white" className="w-full max-w-[200px] h-auto" />
        </div>

        <div className="p-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center">
          <h3 className="sr-only">Mark on light neutral</h3>
          <img src={teeTunerSocialMark} alt="TeeTuner social mark on light gray" className="w-full max-w-[200px] h-auto" />
        </div>

        <div className="p-8 rounded-lg bg-black flex items-center justify-center">
          <h3 className="sr-only">Mark on dark background</h3>
          <img src={teeTunerSocialMark} alt="TeeTuner social mark on black" className="w-full max-w-[200px] h-auto" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-h4 mb-4 text-primary">Size specifications</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-h5 mb-2">Minimum sizes</h5>
            <ul className="list-disc pl-5 space-y-2 text-body">
              <li>Digital: 64px square</li>
              <li>Print: 0.5 inch square</li>
            </ul>
          </div>
          <div>
            <h5 className="text-h5 mb-2">Clear space</h5>
            <ul className="list-disc pl-5 space-y-2 text-body">
              <li>Leave at least one-quarter of the mark width as padding when pairing with other elements</li>
              <li>Keep the square aspect ratio; do not crop or warp the artwork</li>
              <li>Use the provided SVG for sharp edges at any scale</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionStack>
  );
};

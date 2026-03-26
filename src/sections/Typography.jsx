import React from 'react';
import GetFont from '../components/GetFont';
import { Section, SectionStack } from '../components/Section';
import { fontFamilyDownloads } from '../data/fontDownloads';

const Typography = () => {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <SectionStack>
          <h2 className="text-h2">Typography</h2>

          <p className="text-lead text-gray-600 max-w-3xl">
            <strong className="font-semibold text-gray-800">Alegreya</strong> and{' '}
            <strong className="font-semibold text-gray-800">Oswald</strong> on this site load from{' '}
            <a
              href="https://fonts.google.com/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Fonts
            </a>
            . Bundled under{' '}
            <code className="text-small bg-gray-100 px-1.5 py-0.5 rounded">src/assets/fonts/</code> are the same
            families as downloaded from Google (<code className="text-small bg-gray-100 px-1 rounded">Alegreya.zip</code>
            , <code className="text-small bg-gray-100 px-1 rounded">Oswald.zip</code>
            , and expanded folders) for offline installs, print, or subsetting.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl">
            <h4 className="text-h4 mb-3 text-primary">Web implementation</h4>
            <p className="text-body text-gray-600 mb-4">
              Match this site’s <code className="text-small bg-gray-100 px-1 rounded">preconnect</code> and stylesheet,
              then use scoped classes (swap <code className="text-small bg-gray-100 px-1 rounded">teetuner</code> for
              your own uniquifier):
            </p>
            <pre className="text-small bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet">

.alegreya-teetuner {
  font-family: "Alegreya", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.oswald-teetuner {
  font-family: "Oswald", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}`}
            </pre>
            <p className="text-small text-gray-600 mt-3">
              This page uses <code className="bg-gray-100 px-1 rounded">.alegreya-teetuner</code> on{' '}
              <code className="bg-gray-100 px-1 rounded">{'<body>'}</code>. Override{' '}
              <code className="bg-gray-100 px-1 rounded">font-weight</code> /{' '}
              <code className="bg-gray-100 px-1 rounded">font-style</code> per element as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4 gap-4">
                <h3 className="text-h3 font-alegreya">Alegreya</h3>
                <GetFont fontName="Alegreya" />
              </div>
              <p className="text-lead mb-6 text-gray-600">Primary serif typeface</p>
              <div className="space-y-4">
                <p className="font-alegreya font-normal">Regular (400) — Alegreya Regular</p>
                <p className="font-alegreya font-normal italic">Regular italic (400) — Alegreya Italic</p>
                <p className="font-alegreya font-medium">Medium (500) — Alegreya Medium</p>
                <p className="font-alegreya font-semibold">Semibold (600) — Alegreya Semibold</p>
                <p className="font-alegreya font-bold">Bold (700) — Alegreya Bold</p>
                <p className="font-alegreya font-extrabold">Extrabold (800) — Alegreya Extrabold</p>
                <p className="font-alegreya font-black">Black (900) — Alegreya Black</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4 gap-4">
                <h3 className="text-h3 font-oswald tracking-tight uppercase">Oswald</h3>
                <GetFont fontName="Oswald" />
              </div>
              <p className="text-lead mb-6 text-gray-600">Condensed sans for display</p>
              <div className="space-y-4">
                <p className="font-oswald text-3xl font-extralight tracking-tight">ExtraLight (200)</p>
                <p className="font-oswald text-2xl font-light tracking-tight">Light (300)</p>
                <p className="font-oswald text-xl font-normal tracking-tight">Regular (400)</p>
                <p className="font-oswald text-xl font-medium tracking-tight">Medium (500)</p>
                <p className="font-oswald text-xl font-semibold tracking-tight">SemiBold (600)</p>
                <p className="font-oswald text-xl font-bold tracking-tight">Bold (700)</p>
                <p className="text-small text-gray-600">
                  Variable weights on the web are <code className="bg-gray-100 px-1 rounded">200–700</code>; static TTFs
                  are in the repo under <code className="bg-gray-100 px-1 rounded">Oswald/static/</code>.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-h3 mb-2">Download family archives</h3>
            <p className="text-body text-gray-600 mb-6">
              ZIPs mirror the Google Fonts download bundles in{' '}
              <code className="text-small bg-gray-100 px-1 rounded">src/assets/fonts/</code>. Use the links for licensing
              details and pairing suggestions on Google Fonts.
            </p>
            <ul className="space-y-6">
              {fontFamilyDownloads.map(({ name, zipFile, zipUrl, googleFontsUrl, blurb }) => (
                <li
                  key={name}
                  className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                >
                  <div>
                    <h4 className="text-h5 text-primary">{name}</h4>
                    <p className="text-small text-gray-600 mt-1">{blurb}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={zipUrl}
                      download={zipFile}
                      className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-4 py-2 text-small font-medium text-white hover:bg-primary-dark transition-colors"
                    >
                      Download {zipFile}
                    </a>
                    <a
                      href={googleFontsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-small font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      Open on Google Fonts
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <SectionStack>
            <h3 className="text-h3">Usage guidelines</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-h4 mb-4 text-primary">Alegreya</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-h5 mb-2">Primary uses</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Body copy, long-form content, and general UI text</li>
                    <li>Section headings when a serif voice fits the layout</li>
                    <li>Pull quotes and supporting editorial content</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-h5 mb-2">Sizing</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Minimum 14px for dense body text on web</li>
                    <li>Line height around 1.5–1.6 for paragraphs</li>
                    <li>Keep line length near 45–75 characters for readability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-h4 mb-4 text-primary">Oswald</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-h5 mb-2">Primary uses</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Hero headlines, titles, and short display lines</li>
                    <li>Navigation, labels, and UI chrome when a condensed sans fits</li>
                    <li>Pair with Alegreya — avoid long paragraphs set in Oswald</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-h5 mb-2">Sizing</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Keep display sizes clearly larger than body (Alegreya)</li>
                    <li>Default letter spacing is often enough; tighten carefully for all-caps</li>
                    <li>Use heavier weights sparingly so headlines stay distinct from UI text</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-h4 mb-4 text-primary">Type scale</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-h5 mb-2">Heading sizes</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>H1: 48px / 3rem — often Alegreya or Oswald for hero treatments</li>
                    <li>H2: 36px / 2.25rem</li>
                    <li>H3: 28px / 1.75rem</li>
                    <li>H4: 24px / 1.5rem</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-h5 mb-2">Body text</h5>
                  <ul className="list-disc pl-5 space-y-2 text-body">
                    <li>Large: 20px / 1.25rem</li>
                    <li>Base: 16px / 1rem — default body (Alegreya)</li>
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

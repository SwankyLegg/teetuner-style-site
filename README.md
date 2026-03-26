# TeeTuner brand guidelines

A modern, interactive web application that serves as the central hub for TeeTuner brand assets and guidelines. Built with React and Vite, it provides easy access to logos, typography, color palettes, and usage notes.

Update the live URL below after you publish to GitHub Pages (or another host).

**View live site:** `https://<your-username>.github.io/teetuner-style-site/`

## Features

- Interactive color palette showcase
- Logo previews and SVG downloads (click any color swatch or value to copy)
- Typography guidelines and font references
- Brand values and logo usage guidelines
- Responsive layout

## Tech stack

- React 18
- Vite
- Tailwind CSS
- Radix UI components

## Getting started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository and open the project directory.

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app is available at the URL Vite prints (with this repo’s base path, typically `http://localhost:5173/teetuner-style-site/`).

### Production build

```bash
npm run build
```

Output is written to the `dist` directory.

## Deployment (GitHub Pages)

The Vite `base` is set for GitHub Pages under the `teetuner-style-site` repository name. Deploy:

```bash
npm run deploy
```

## Project structure

```
teetuner-style-site/
├── public/            # Static files (e.g. favicon)
├── src/
│   ├── assets/
│   │   └── teetuner/  # TeeTuner SVG brand assets
│   ├── components/
│   ├── sections/
│   └── pages/
└── …config files
```

## License

Proprietary. All rights reserved by TeeTuner.

## Contact

For questions about the brand system, contact the TeeTuner team.

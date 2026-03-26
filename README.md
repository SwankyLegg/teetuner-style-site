# TeeTuner brand guidelines

A modern, interactive web application that serves as the central hub for TeeTuner brand assets and guidelines. Built with React and Vite, it provides easy access to logos, typography, color palettes, and usage notes.

**Live site:** [https://swankylegg.github.io/teetuner-style-site/](https://swankylegg.github.io/teetuner-style-site/)

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

Site URL: **https://swankylegg.github.io/teetuner-style-site/**  
(`vite.config.js` uses `base: '/teetuner-style-site/'` to match the repo name.)

### One-time repo settings

1. On GitHub: **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **`gh-pages`**, folder **`/ (root)`**, then save.

After the first successful deploy, the site appears at the URL above (often within a minute).

### Automatic deploy (recommended)

Pushes to **`main`** or **`master`** run [`.github/workflows/deploy-gh-pages.yml`](.github/workflows/deploy-gh-pages.yml): it runs `npm ci`, `npm run build`, and updates the **`gh-pages`** branch with `dist/`.

### Manual deploy from your machine

Requires push access and a configured `origin` remote:

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

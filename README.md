# Vesta Buildworks Brand Guidelines

A modern, interactive web application that serves as the central hub for Vesta Buildworks' brand assets and guidelines. Built with React and Vite, this application provides easy access to logos, typography, color palettes, and brand usage guidelines.

🌐 **[View Live Site](https://swankylegg.github.io/vesta-buildworks/)**

## Features

- 🎨 Interactive color palette showcase
- 🖼️ Logo downloads in various formats (clicking any color will copy to keyboard)
- 📝 Typography guidelines and font downloads
- 💫 Brand values and usage guidelines
- 📱 Responsive design for all devices

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Radix UI Components
- JSZip for asset downloads
- File-Saver for download handling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/vesta-buildworks.git
cd vesta-buildworks
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Deployment

The project is configured for GitHub Pages deployment. To deploy:

```bash
npm run deploy
# or
yarn deploy
```

## Project Structure

```
vesta-buildworks/
├── src/
│   ├── assets/        # Logo files and other assets
│   ├── components/    # Reusable UI components
│   ├── sections/      # Main content sections
│   └── pages/         # Page components
├── public/            # Static files
└── ...config files
```

## License

This project is private and proprietary to Vesta Buildworks.

## Contact

For questions or support, please contact the Vesta Buildworks team.

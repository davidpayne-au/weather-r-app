# Weather App

[Github Pages](https://davidpayne-au.github.io/weather-r-app/)

[![Deploy to GitHub Pages](https://github.com/davidpayne-au/weather-r-app/actions/workflows/deploy.yml/badge.svg)](https://github.com/davidpayne-au/weather-r-app/actions/workflows/deploy.yml)

A modern, accessible React application for viewing real-time weather information powered by the Open-Meteo API.

## Features

- 🌤️ **Real-time Weather Data**: Get current temperature, humidity, wind speed, and weather conditions
- 🔍 **Location Search**: Search for any city worldwide using the geocoding API
- ♿ **Accessibility Compliant**: WCAG 2.1 compliant with proper ARIA labels, keyboard navigation, and color contrast
- 🎨 **Cheerful Animations**: Beautiful sun spinner loading animation
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🧪 **Fully Tested**: Comprehensive unit tests using Vitest and React Testing Library
- 🧭 **Route-Driven Navigation**: Clean routing with React Router

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router DOM** for navigation
- **Vitest** for unit testing
- **React Testing Library** for component testing
- **Open-Meteo API** for weather data

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
\`\`\`bash
cd weather-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install --include=dev
\`\`\`

### Running the App

Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The app will be available at \`http://localhost:5173\`

### Building for Production

Build the app:
\`\`\`bash
npm run build
\`\`\`

Preview the production build:
\`\`\`bash
npm run preview
\`\`\`

### Running Tests

Run all tests:
\`\`\`bash
NODE_ENV=development npm test -- --run
\`\`\`

Run tests in watch mode:
\`\`\`bash
NODE_ENV=development npm test
\`\`\`

Run tests with UI:
\`\`\`bash
NODE_ENV=development npm run test:ui
\`\`\`

## Usage

1. **Home Page**: View an overview of the app's features
2. **About Page**: Learn more about the application and its technology stack
3. **Weather Page**:
   - Enter a city name in the search box
   - Select your desired location from the results
   - View current weather conditions including:
     - Temperature (°F)
     - Humidity (%)
     - Wind Speed (mph)
     - Weather description

## Accessibility Features

This application is built with accessibility in mind:

- ✅ Proper semantic HTML structure
- ✅ ARIA labels and roles for screen readers
- ✅ Keyboard navigation support
- ✅ Focus indicators meeting WCAG 2.1 AA contrast requirements
- ✅ Color contrast ratios exceeding 4.5:1 for normal text
- ✅ \`aria-live\` regions for dynamic content updates
- ✅ Accessible form labels and error messages

### Color Contrast Compliance

All text elements meet WCAG 2.1 Level AA standards:
- Primary blue (#1e40af) on white background: 9.73:1 ratio
- Focus indicators use amber (#fbbf24) for high visibility
- Error messages use red (#dc2626) with sufficient contrast

## Project Structure

\`\`\`
weather-app/
├── src/
│   ├── components/       # Reusable components (NavBar, LoadingSpinner)
│   ├── pages/           # Page components (Home, About, Weather)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions and API calls
│   ├── test/            # Test files and setup
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── dist/                # Production build output
\`\`\`

## API

This app uses the free [Open-Meteo API](https://open-meteo.com/):
- **Geocoding API**: For location search
- **Weather Forecast API**: For current weather data

No API key required!

## License

MIT

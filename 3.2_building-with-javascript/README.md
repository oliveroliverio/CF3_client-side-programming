# MyFlix React Client

A React-based client-side application for the MyFlix movie application.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd myflix-client
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm start
```
This will:
- Start the development server at http://localhost:1234
- Enable hot reloading for instant updates
- Show build errors in the console

## Available Scripts

- `npm start` - Start the development server
- `npm run watch` - Watch for changes without starting server
- `npm run build` - Build the application for production
- `npm run clean` - Clean the cache and build directories

## Project Structure

```
myflix-client/
├── src/
│   ├── components/
│   │   └── main-view/
│   │       └── main-view.jsx
│   ├── index.html
│   ├── index.scss
│   └── index.jsx
├── .parcelrc
├── package.json
└── README.md
```

## Technology Stack

- React 18
- Parcel (bundler)
- SCSS for styling

## Build for Production

To create a production build:

```bash
# Clean previous builds
npm run clean

# Create production build
npm run build
```

The production files will be available in the `dist` directory.

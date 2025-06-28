# Setup Guide

This guide will help you set up the GenZBots application for development.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Git

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd genzbots
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env.local`
   - Update environment variables as needed

4. **Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dependencies Overview

### Core Dependencies
- Next.js 15.2.3
- React 19.0.0
- TypeScript

### UI Components
- @mantine/core
- @radix-ui components
- styled-components

### Animations
- framer-motion
- react-scroll-parallax

### Carousels
- embla-carousel-react
- react-slick
- swiper

### Styling
- Tailwind CSS
- class-variance-authority
- classnames

## Development Tools

### Code Quality
- ESLint configuration
- TypeScript strict mode
- Prettier formatting

### Build Tools
- Turbopack for faster development
- PostCSS for CSS processing
- Autoprefixer

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Clear `.next` directory
   - Delete `node_modules` and reinstall

2. **Type Errors**
   - Ensure TypeScript version matches
   - Check @types packages versions

3. **Style Issues**
   - Clear PostCSS cache
   - Verify Tailwind configuration

### Getting Help

- Check existing GitHub issues
- Review documentation
- Create a new issue with details

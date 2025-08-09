# Technology Stack & Build System

## Framework & Core Technologies

- **Framework**: Next.js 15.2.3 with App Router
- **Runtime**: React 19.0.0
- **Language**: TypeScript 5.8.2
- **Build Tool**: Turbopack (for development)
- **Output**: Static export (`output: 'export'`)

## UI & Styling

- **CSS Framework**: Tailwind CSS 4.1.5
- **UI Components**: 
  - Radix UI primitives (@radix-ui/react-*)
  - Mantine Core 7.17.4
  - Custom styled-components 6.1.17
- **Design System**: Shadcn/ui components (New York style)
- **Styling Utilities**:
  - class-variance-authority for component variants
  - clsx + tailwind-merge (cn utility)
  - DaisyUI 5.0.25

## Animations & Interactions

- **Primary Animation**: Framer Motion 12.19.2
- **Scroll Effects**: react-scroll-parallax 3.4.5
- **3D Effects**: react-parallax-tilt 1.7.299
- **Particles**: @tsparticles/react 3.0.0

## Carousels & Sliders

- **Primary**: Embla Carousel 8.6.0 (with autoplay)
- **Alternative**: React Slick 0.30.3
- **Modern**: Swiper 11.2.6

## Icons & Assets

- **Icons**: Lucide React 0.488.0, Tabler Icons 3.34.0
- **SVG Processing**: @svgr/webpack for SVG imports
- **Images**: Next.js Image component with unoptimized setting

## Development Tools

- **Linting**: ESLint 9 with Next.js config
- **PostCSS**: Custom setup with Mantine preset and simple-vars
- **TypeScript**: Strict mode enabled
- **Path Aliases**: `@/*` for src, `@/assets/*` for assets

## Common Commands

```bash
# Development (with Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Build Configuration

- Static export enabled for deployment
- SWC minification enabled
- CSS optimization experimental feature
- ESLint ignored during builds
- Images unoptimized for static export
- Custom webpack config for SVG processing

## Key Dependencies

- **Forms**: react-phone-input-2 for phone inputs
- **Charts**: Recharts 2.15.4
- **Flow Diagrams**: ReactFlow 11.11.4
- **Spring Animations**: @react-spring/web 10.0.1
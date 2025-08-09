# Project Structure & Organization

## Root Directory Structure

```
├── src/                    # Main source code
├── public/                 # Static assets
├── .kiro/                  # Kiro configuration
├── scripts/                # Build and utility scripts
├── attached_assets/        # Development assets and error logs
└── [config files]          # Various configuration files
```

## Source Code Organization (`src/`)

### Core Directories

- **`app/`** - Next.js App Router pages and layouts
  - `globals.css` - Global styles and CSS variables

- **`pages/`** - Page components and routing
  - Individual page files (about.tsx, contact.tsx, etc.)
  - Nested directories for complex routes (blogs/, services/, solutions/)
  - `_app.tsx` and `_document.tsx` for app configuration

- **`components/`** - Reusable UI components
  - **`ui/`** - Base UI components (Shadcn/ui style)
  - **`layout/`** - Layout-specific components
  - **`home/`** - Homepage-specific components
  - **`about_page/`** - About page components
  - **`service/`** - Service-related components
  - **`solutions/`** - Solutions showcase components
  - **`custome/`** - Custom specialized components
  - **`enhanced/`** - Enhanced/advanced components
  - Root-level components (Navbar.tsx, Footer.tsx, etc.)

- **`lib/`** - Utility libraries and configurations
  - `utils.ts` - Common utility functions (cn helper, etc.)

- **`utils/`** - Helper functions and utilities
  - `navigation.ts` - Navigation helpers
  - `routes.ts` - Route constants and definitions
  - `getScrollAnimation.js` - Animation utilities

- **`shared/`** - Shared resources
  - **`data/`** - Static data and content
  - `types.d.ts` - Shared TypeScript type definitions

- **`assets/`** - Asset files
  - **`styles/`** - Additional stylesheets
  - **`svgs/`** - SVG assets and icons

- **`styles/`** - Global styles
  - `globals.css` - Main global stylesheet

## Component Architecture Patterns

### UI Components (`src/components/ui/`)
- Follow Shadcn/ui patterns with forwardRef
- Use class-variance-authority for variants
- Implement proper TypeScript interfaces
- Include displayName for debugging

### Page Components
- Organized by feature/page in dedicated folders
- Use consistent naming conventions
- Implement proper TypeScript props interfaces

### Shared Types (`src/shared/types.d.ts`)
- Comprehensive type definitions for widgets, components, and data structures
- Includes types for forms, images, navigation, testimonials, etc.
- Follows consistent naming patterns (Props suffix for component props)

## Configuration Files

- **`components.json`** - Shadcn/ui configuration
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`next.config.ts`** - Next.js build configuration
- **`tsconfig.json`** - TypeScript configuration with path aliases
- **`package.json`** - Dependencies and scripts

## Asset Management

### Public Assets (`public/`)
- **`assets/`** - General assets (closed folder, needs exploration)
- SVG files for logos and icons
- Static images and graphics

### Path Aliases
- `@/*` maps to `./src/*`
- `@/assets/*` maps to `./src/assets/*`

## Naming Conventions

- **Files**: PascalCase for components, camelCase for utilities
- **Directories**: lowercase with hyphens or underscores
- **Components**: PascalCase with descriptive names
- **Types**: PascalCase with Props/Type suffix
- **Constants**: UPPER_SNAKE_CASE (see ROUTES in routes.ts)

## Development Workflow

- Components are organized by feature and reusability
- Shared utilities in dedicated directories
- Type definitions centralized in shared/types.d.ts
- Route constants defined in utils/routes.ts
- Global styles managed through Tailwind and CSS modules
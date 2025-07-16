# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Labo Jaune agency website - a modern, minimalist digital agency website inspired by BASIC/DEPT®'s design philosophy, with a focus on African digital experiences. Built with Svelte 5/SvelteKit and configured for Vercel deployment.

## Essential Commands

```bash
# Development
npm run dev          # Start development server
npm run dev -- --open # Start dev server and open browser

# Build & Preview
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality (run before committing)
npm run lint         # Run Prettier and ESLint
npm run format       # Auto-format code with Prettier
npm run check        # Type check with svelte-check

# Testing
npm run test         # Run all tests once
npm run test:unit    # Run tests in watch mode
```

## Key Project Files

- **PROJECT_TASKS.md** - Main task tracking file with project progress, completed items, and todos
- **DEVELOPMENT_STRATEGY.md** - Comprehensive development strategy and timeline
- **BRAND_GUIDELINES.md** - Complete brand guidelines and design system documentation
- **design-system.json** - Structured design tokens for programmatic use
- **content.json** - All website content in French

## Design System

- **Primary Color**: Yellow (#FFD700) - "Jaune"
- **Typography**: Inter (sans), GT Super (serif), JetBrains Mono (mono)
- **Style**: Minimalist black & white with strategic yellow accents
- **Philosophy**: "Simple to understand, impossible to ignore"

## Architecture Overview

### Tech Stack

- **Framework**: SvelteKit 2.22.0 with Svelte 5
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v3 (Note: v4 has ARM64 compatibility issues)
- **Testing**: Vitest with Playwright for browser testing
- **Deployment**: Vercel adapter
- **Animations**: Native CSS + Svelte transitions

### Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── atoms/      # Basic components (Button, Typography, etc.)
│   │   ├── molecules/  # Compound components
│   │   ├── organisms/  # Complex components (Navigation, Footer)
│   │   └── templates/  # Page templates
│   ├── stores/         # Svelte stores
│   ├── utils/          # Helper functions and utilities
│   └── data/           # Content and data files
└── routes/             # SvelteKit pages
```

### Testing Configuration

The project has dual test environments configured in vite.config.js:

- Client tests run in browser environment using Playwright
- Server tests run in Node environment
- Tests can be co-located with components or in separate test directories

## Current Status (Check PROJECT_TASKS.md for details)

- Phase 1: ✅ COMPLETE - Foundation, core components, layout
- Phase 2: 🚧 IN PROGRESS - Main pages (Homepage, About, Services)
- Phase 3: ⏳ PENDING - Portfolio & Contact
- Phase 4: ⏳ PENDING - Polish & Optimization

## Key Design Patterns

1. **Atomic Design** - Components organized by complexity
2. **Mobile-First** - All styles start mobile, enhance for desktop
3. **Minimalist Animations** - Subtle fade, slide, and scale effects
4. **Component Props** - Consistent variant/size/className patterns

## Content Language

Primary language is **French** with potential for English translation later.

## Known Issues

1. TailwindCSS v4 incompatible with ARM64 (using v3 instead)
2. Mobile menu needs route change handling improvement

## Development Workflow

1. Check PROJECT_TASKS.md for current tasks
2. Update task status as you work
3. Follow atomic design principles for new components
4. Test on mobile first
5. Ensure French content is properly formatted
6. Run dev server with `npm run dev`

## Component Naming Conventions

- **Atoms**: Single-purpose components (Button, Typography)
- **Molecules**: Combinations of atoms (Card, FormField)
- **Organisms**: Complex UI sections (Navigation, Footer)
- **Templates**: Page layouts

## Animation Guidelines

- Use transitions from `$lib/utils/transitions.js`
- Consistent timing: fast (200ms), normal (300ms), slow (600ms)
- Entrance animations: fade + slight slide up
- Hover states: color transitions, slight scale

## Important Notes

- When creating new routes, follow SvelteKit's file-based routing conventions
- Always run `npm run lint` and `npm run check` before committing changes
- The project uses JavaScript with JSDoc type annotations, not TypeScript
- Remember to update PROJECT_TASKS.md as you complete items!

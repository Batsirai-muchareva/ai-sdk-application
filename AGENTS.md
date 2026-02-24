# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Customer support AI application built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Commands

```bash
# Development
pnpm dev          # Start dev server at http://localhost:3000

# Build
pnpm build        # Production build
pnpm start        # Run production build

# Quality
pnpm lint         # Run ESLint
```

## Tech Stack

- **Package Manager**: pnpm (required)
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 (uses `@import "tailwindcss"` and `@theme` directive in `globals.css`)
- **Fonts**: Geist Sans and Geist Mono via `next/font/google`

## Architecture

### App Router Structure
- `app/layout.tsx` - Root layout with font configuration and global styles
- `app/page.tsx` - Homepage component
- `app/globals.css` - Tailwind imports and CSS custom properties for theming

### Path Aliases
`@/*` maps to the project root (configured in `tsconfig.json`)

### Styling Notes
- Tailwind CSS 4 uses the new configuration syntax in `globals.css` via `@theme inline` block
- Theme colors defined as CSS custom properties: `--background`, `--foreground`
- Dark mode via `prefers-color-scheme` media query

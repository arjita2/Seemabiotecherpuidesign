# Seema Biotech ERP UI Design

## Overview
This is a React-based ERP (Enterprise Resource Planning) UI design for Seema Biotech. The application provides interfaces for managing indoor and outdoor biotech processes including media preparation, subculturing, incubation, hardening, and sampling operations.

## Project Architecture
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with custom UI components
- **Routing**: React Router DOM
- **UI Components**: Radix UI primitives with custom styling
- **Charts**: Recharts for data visualization

## Tech Stack
- React 18.3.1
- TypeScript 5.3.3
- Vite 6.3.5
- Tailwind CSS 3.4.0
- React Router DOM
- Radix UI components
- Lucide React (icons)

## Project Structure
```
src/
├── components/
│   ├── common/         # Shared components (StatsCard, StatusBadge)
│   ├── figma/          # Figma-related components
│   ├── layout/         # Layout components (Header, Sidebar, Layout)
│   └── ui/             # Radix UI components
├── pages/
│   ├── indoor/         # Indoor module pages
│   ├── outdoor/        # Outdoor module pages
│   └── Dashboard.tsx   # Main dashboard
├── styles/
│   └── globals.css     # Global styles
├── App.tsx             # Main app component with routing
└── main.tsx            # Entry point
```

## Development Setup
- Port: 5000
- Host: 0.0.0.0 (configured for Replit)
- Dev Server: Vite with Hot Module Replacement

## Available Routes
### Indoor Module
- `/indoor/media-preparation` - Media Preparation
- `/indoor/subculturing` - Subculturing
- `/indoor/incubation` - Incubation
- `/indoor/sampling` - Sampling

### Outdoor Module
- `/outdoor/primary-hardening` - Primary Hardening
- `/outdoor/secondary-hardening` - Secondary Hardening
- `/outdoor/mortality` - Mortality
- `/outdoor/holding-area` - Holding Area
- `/outdoor/sampling` - Outdoor Sampling

## Recent Changes
- 2025-11-23: UI Improvements
  - Changed default route to Media Preparation (instead of Dashboard)
  - Improved sidebar hover effects with better color contrast
  - Changed hover color from #F3FFF4 to #E8F5E9 (darker green)
  - Changed hover text color to #2E7D32 (dark green) for visibility
  - Increased font sizes across the application by 1-2px
  - Enhanced sidebar text readability with larger fonts (15px for navigation items)
  
- 2025-11-23: Initial setup in Replit environment
  - Added TypeScript configuration
  - Added Tailwind CSS configuration
  - Configured Vite for Replit (port 5000, host 0.0.0.0)
  - Installed all dependencies
  - Set up development workflow

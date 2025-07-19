# 4under.ca Marketing Website

## Overview

This is a modern, professional marketing website for 4under.ca - a non-GPS pace-of-play tracking application designed specifically for golf course operators and PGA professionals. The website is built as a full-stack application with a React frontend and Express.js backend, featuring form submissions for demo requests and contact inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

**July 19, 2025 - Admin Demo Requests Management:**
- Added "Demo Requests" tab to admin dashboard
- Implemented professional table view for all free trial submissions
- Added clickable email and phone links for easy contact
- Included submission timestamps and formatted comments
- Enhanced admin panel with dual-tab navigation (Content + Demo Requests)
- Integrated with existing authentication and data fetching system

**January 12, 2025 - Use Cases Page Added:**
- Created comprehensive Use Cases page with professional golf industry copy
- Added four distinct sections: Public Courses, Private & Member Clubs, Tournaments & Events, For Every Course
- Implemented mobile-responsive design matching existing site styling
- Added Use Cases to main navigation menu
- Integrated all Use Cases content into admin content management system
- Updated admin panel with new "Use Cases" tab for content editing

**January 11, 2025 - Major Design Overhaul:**
- Implemented mobile-first, story-driven layout approach
- Updated brand colors to official 4Under palette (#174C3C primary, #276D57 hover)
- Removed all emojis and icons for clean, professional appearance
- Restructured all pages with full-width sections and generous whitespace
- Added placeholder boxes for future screenshots on Features page
- Positioned CTAs at bottom of scroll rather than top-heavy approach
- Updated typography to use Inter font for better readability
- Simplified forms with larger, more tappable inputs for mobile
- Cleaned navigation to be sticky with single-row layout

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API**: RESTful endpoints for form submissions
- **Middleware**: Express middleware for request logging and error handling

### Database & Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (Neon Database via @neondatabase/serverless)
- **Schema**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Page Structure
The website follows a multi-page navigation structure:
- **Home**: Hero section with value propositions and call-to-action
- **Features**: Detailed feature breakdown with icons and descriptions
- **Use Cases**: Four distinct sections targeting different golf operation types
- **Request Demo**: Form for demo requests with validation
- **Contact**: Contact form for general inquiries
- **FAQ**: Expandable FAQ section with common questions
- **Privacy/Terms**: Legal pages for compliance

### UI Components
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Design System**: Golf-themed color palette (green and white)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components from Radix UI

### Form Handling
- **Validation**: Zod schemas for type-safe form validation
- **Submission**: Async form submission with loading states
- **Feedback**: Toast notifications for success/error states
- **Data Flow**: Forms submit to backend API endpoints

## Data Flow

### Form Submissions
1. User fills out demo request or contact form
2. React Hook Form validates input using Zod schemas
3. Form data submitted via TanStack Query mutation
4. Backend validates data and stores in database (or memory for development)
5. Success/error response returned to frontend
6. Toast notification displays result to user

### Database Schema
- **Users**: Basic user authentication structure (future use)
- **Demo Requests**: Captures name, course, role, email, phone, comments
- **Contact Messages**: Captures first/last name, email, subject, message
- **Timestamps**: Automatic creation timestamps for all records

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Wouter, TanStack Query
- **Styling**: Tailwind CSS, Radix UI components
- **Forms**: React Hook Form, Zod validation
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Core**: Express.js, TypeScript
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin and esbuild for server
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer
- **Replit Integration**: Cartographer and error overlay plugins

## Deployment Strategy

### Development Environment
- **Server**: Development server runs on tsx with hot reloading
- **Frontend**: Vite dev server with HMR and proxy to backend
- **Database**: Can use either in-memory storage or PostgreSQL

### Production Build
- **Frontend**: Vite builds optimized static assets to dist/public
- **Backend**: esbuild bundles server code to dist/index.js
- **Deployment**: Single artifact with static files served by Express

### Environment Configuration
- **Database**: Requires DATABASE_URL environment variable for PostgreSQL
- **Fallback**: In-memory storage used when DATABASE_URL not provided
- **Scripts**: Separate dev/build/start scripts for different environments

### Key Architectural Decisions

1. **Monorepo Structure**: Frontend, backend, and shared code in single repository for easier development and deployment
2. **Shared Schema**: Database schemas and types shared between frontend and backend for type safety
3. **Progressive Enhancement**: Forms work with JavaScript disabled, enhanced with React
4. **Development Flexibility**: In-memory storage allows development without database setup
5. **Type Safety**: End-to-end TypeScript with Zod validation for runtime type checking
6. **Component Reusability**: shadcn/ui provides consistent, accessible components
7. **Mobile-First**: Responsive design prioritizes mobile experience
8. **Performance**: Vite and esbuild provide fast development and optimized production builds
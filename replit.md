# Overview

This is a full-stack personal portfolio website for Farid Axundov, an IT professional and cybersecurity specialist. The application showcases professional experience, skills, projects, and provides a contact form for visitors. It's built as a modern web application with a React frontend and Express.js backend, featuring a clean, professional design with dark/light theme support and sections for about, experience, education, skills, projects, and contact information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: Shadcn/UI component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Request Handling**: Express middleware for JSON parsing and URL encoding
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with Vite integration in development mode

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Temporary Storage**: In-memory storage implementation for development/testing
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

## Theme and User Experience
- **Dark/Light Mode**: Complete theme switching functionality with ThemeProvider context
- **Theme Toggle**: Sun/Moon icon toggle button in navigation (both desktop and mobile)
- **Theme Persistence**: User preference saved to localStorage with system preference fallback
- **Comprehensive Styling**: All components support both light and dark themes with proper contrast ratios

## Authentication and Authorization
- Currently implements basic user schema structure but no active authentication system is in use for the contact form functionality.

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- **UI Library**: Comprehensive Radix UI component collection for accessible UI primitives
- **Form Validation**: Zod for runtime type checking and validation
- **Date Handling**: date-fns for date manipulation and formatting
- **Icons**: Lucide React for consistent icon system
- **Fonts**: Google Fonts (Inter) for typography
- **Development Tools**: Replit-specific plugins for development environment integration

The architecture follows a clean separation between client and server code, with shared TypeScript types and schemas. The application uses modern web development practices including type safety, component composition, responsive design principles, and comprehensive theming support.

## Recent Updates (August 2025)
- **Dark Mode Implementation**: Added complete dark mode support across all components with theme toggle functionality
- **Updated Certifications**: Integrated latest certifications from LinkedIn profile including IBM Certified in Cybersecurity, Cisco Ethical Hacker, Google Cybersecurity Professional Certificate, and Cisco Introduction to Cybersecurity (all issued Jul 2025)
- **Enhanced Education Section**: Updated with comprehensive certification details and professional skill mappings
- **Theme System**: Implemented robust light/dark theme switching with localStorage persistence and system preference detection
- **Professional Images**: Added authentic server room and data center infrastructure images to Hero and About sections, replacing placeholder content with real cybersecurity environment visuals
- **Project Migration**: Successfully migrated from Replit Agent to standard Replit environment with proper dependency management and workflow setup
- **Timeline Enhancement**: Improved experience section with proper alternating layout, increased card width by 50px, and optimized 150px spacing from center timeline for better visual balance
- **UI Refinements**: Updated experience cards to rectangular design with improved proportions and professional appearance
- **Experience Update**: Added current Server Room Operations Specialist position (Sep 2023 - Present) highlighting enterprise infrastructure management, rack configuration, cooling systems optimization, and 99.9% uptime maintenance expertise
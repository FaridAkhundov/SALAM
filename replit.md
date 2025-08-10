# Overview

This is a full-stack personal portfolio website for Farid Axundov, an IT professional and cybersecurity specialist. The application showcases professional experience, skills, projects, and provides a contact form for visitors. It's built as a modern web application with a React frontend and Express.js backend, featuring a clean, professional design with sections for about, experience, skills, projects, and contact information.

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

The architecture follows a clean separation between client and server code, with shared TypeScript types and schemas. The application uses modern web development practices including type safety, component composition, and responsive design principles.
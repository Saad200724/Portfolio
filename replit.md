# Portfolio Website

## Overview

This is a personal portfolio website for Saad Bin Tofayel Tahsin, a Python developer and fullstack engineer. The application showcases projects, skills, extra-curricular activities, and provides a contact form for potential clients or collaborators. Built as a modern full-stack web application with a focus on beautiful UI/UX and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Framer Motion** for declarative animations and page transitions

**UI Component System**
- **shadcn/ui** components built on Radix UI primitives for accessible, customizable UI elements
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theme customization (defined in tailwind.config.ts)
- Component library follows the "New York" style variant

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management, caching, and API interactions
- Custom query client configuration in `lib/queryClient.ts` with standardized error handling
- Form state managed by **React Hook Form** with **Zod** schema validation

**Code Organization**
- Path aliases configured for clean imports: `@/` for client code, `@shared/` for shared types
- Components organized by type: UI primitives in `components/ui/`, feature components in `components/`, pages in `pages/`
- Shared TypeScript types in `client/src/types/` and database schemas in `shared/schema.ts`

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- Custom middleware for request logging and JSON response capture
- Development and production modes with different build processes

**API Design**
- RESTful endpoints under `/api` prefix
- Routes defined in `server/routes.ts` and registered via `registerRoutes()`
- Endpoints for contact messages, projects, ECAs, skills management
- Request validation using Zod schemas from shared directory

**Data Layer**
- **Drizzle ORM** for type-safe database queries and schema management
- PostgreSQL database (configured for Neon serverless in production)
- Database abstraction through `storage.ts` interface pattern
- Schema definitions use Drizzle's pg-core with auto-generated TypeScript types

**Email Integration**
- Python email service (`server/email_service.py`) for contact form submissions
- SMTP integration with Gmail using app passwords
- Dual email system: notification to site owner and confirmation to user
- Node.js spawns Python subprocess for email operations

**Development Workflow**
- Vite middleware integration in development for seamless HMR
- Static file serving in production from built assets
- Source maps and error overlays in development
- TypeScript compilation checking separate from runtime

### External Dependencies

**Database**
- **PostgreSQL** via Neon serverless (@neondatabase/serverless)
- Connection pooling with pg library
- Schema migrations managed through Drizzle Kit in `migrations/` directory
- Environment variable `DATABASE_URL` required for connection

**Email Service**
- **Gmail SMTP** (smtp.gmail.com:587) for transactional emails
- Requires `GMAIL_APP_PASSWORD` environment variable
- Python's smtplib for email delivery
- HTML email templates for professional formatting

**UI Libraries**
- **Radix UI** primitives for 30+ accessible component foundations
- **Lucide React** for consistent icon system
- **date-fns** for date manipulation and formatting
- **class-variance-authority** and **clsx** for conditional className management

**Development Tools**
- **Replit-specific plugins**: runtime error modal, cartographer for development
- **ESBuild** for production server bundling
- **tsx** for TypeScript execution in development
- **PostCSS** with Tailwind and Autoprefixer

**Third-Party Services**
- Social media integrations: GitHub, WhatsApp, Facebook, Upwork profiles
- External URLs configured in `lib/constants.ts`
- No authentication system currently implemented (admin routes present but not secured)
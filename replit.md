# Portfolio Website

## Overview

This is a personal portfolio website for Saad Bin Tofayel Tahsin (PhantomsByte), a Python developer and fullstack engineer. The application showcases projects, skills, extra-curricular activities, blog posts (linked to Medium), and provides a contact form for potential clients or collaborators. Built as a modern full-stack web application with a focus on beautiful UI/UX, smooth animations, and comprehensive SEO optimization.

**Domain:** https://tahsin.cloud

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
- Endpoints for contact messages, projects, ECAs, skills, and blogs management
- Blog posts linked to Medium profile (https://medium.com/@saadbintofayeltahsin)
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
- **PostgreSQL** - Works with any PostgreSQL database (local, VPS, or cloud-hosted)
- Uses standard `pg` library with connection pooling for maximum compatibility
- Schema migrations managed through Drizzle Kit in `migrations/` directory
- Environment variable `DATABASE_URL` required for connection

### VPS Deployment Guide (Ubuntu)

**Prerequisites**
1. Ubuntu server with Node.js 20+ installed
2. PostgreSQL installed and running locally

**PostgreSQL Setup on Ubuntu VPS**
```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
CREATE DATABASE portfolio;
CREATE USER your_user WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE portfolio TO your_user;
\q
```

**Environment Variables**
Set the following environment variables in your VPS:
```bash
export DATABASE_URL="postgresql://your_user:your_password@localhost:5432/portfolio"
export GMAIL_APP_PASSWORD="your_gmail_app_password"  # For contact form emails
export NODE_ENV="production"
```

**Deployment Steps**
```bash
# Clone your repository
git clone <your-repo-url>
cd <project-directory>

# Install dependencies
npm install

# Build the project
npm run build

# Push database schema
npm run db:push

# Start the production server
npm run start
```

**Using PM2 (Recommended)**
```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start dist/index.js --name "portfolio"

# Enable auto-restart on reboot
pm2 startup
pm2 save
```

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
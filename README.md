# Web Dev Blog

A modern web development blog built with React, Vite, and React Router.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm (comes with Node.js)

## Setup Instructions

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/derekjpeters/web-dev-blog-demo.git
   cd web-dev-blog-demo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```text
src/
├── components/     # Reusable React components
├── pages/         # Page components (Home, Articles, etc.)
├── data/          # Static data and content
├── styles/        # CSS stylesheets
└── assets/        # Static assets (images, icons)
```

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **ESLint** - Code linting

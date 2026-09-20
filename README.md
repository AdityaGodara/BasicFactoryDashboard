# Build Forms Assignment

A Next.js application built with React, TypeScript, and Tailwind CSS for a job dashboard / forms assignment interface.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js 20 or newer
- npm (comes with Node.js)

## Local Setup

1. Open a terminal in the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```
Starts the Next.js app in development mode.

```bash
npm run build
```
Creates a production build.

```bash
npm run start
```
Runs the production build locally.

```bash
npm run lint
```
Runs ESLint checks.

```bash
npm run typecheck
```
Runs TypeScript validation without emitting build files.

## Project Structure

```text
app/              # App router pages and layouts
components/       # Reusable UI components
hooks/            # Custom hooks
lib/              # Utility functions
public/           # Static assets
```

## Notes

- There are no additional environment variables required for local development in the current setup.
- If you encounter a port conflict, stop the existing process or run the dev server on another port using:

```bash
npm run dev -- --port 3001
```

## Common Troubleshooting

- If dependencies are not installed correctly, run:

```bash
rm -rf node_modules package-lock.json
npm install
```

- If TypeScript or lint errors appear, run:

```bash
npm run typecheck
npm run lint
```


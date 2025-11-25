# React + Vite

This project provides a minimal setup for building React applications using the Vite bundler. It includes Hot Module Replacement (HMR), basic ESLint rules, and optional support for React plugins such as Babel and SWC.

## Features
### React + Vite Integration

Fast development environment with Hot Module Replacement (HMR)
Lightweight build system powered by Vite
Simple, out-of-the-box React configuration

## Plugin Support
This setup supports two official Vite plugins for React:
@vitejs/plugin-react
Uses Babel (or oxc when used with Rolldown) to enable Fast Refresh.
@vitejs/plugin-react-swc
Uses SWC for a faster, Rust-based transformation pipeline.
The React Compiler is not enabled by default due to its impact on development and build performance.
To enable it, refer to:
https://react.dev/learn/react-compiler/installation
ESLint Configuration
Includes basic ESLint rules for code quality.


## Tech Stack
React + Vite for frontend development
Firebase Authentication (JWT tokens) for secure user login
LLM Integration (e.g., Gemini) for generating or refining content through backend APIs
Modern JavaScript without TypeScript dependencies
REST APIs for communication between frontend and backend services

## Project Structure (Default Vite Setup)

Setup Instructions
Install Dependencies
npm install

Start the Development Server
npm run dev

Create a Production Build
npm run build

Preview the Build
npm run preview


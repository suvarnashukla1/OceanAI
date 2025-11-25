# React + Vite

This project provides a minimal setup for building React applications using the Vite bundler. It includes Hot Module Replacement (HMR), basic ESLint rules, and optional support for React plugins such as Babel and SWC.

## Features
1. React + Vite Integration

Fast development environment with HMR

Lightweight build system powered by Vite

Out-of-the-box React configuration

2. Plugin Support

This setup supports two official Vite plugins for React:

@vitejs/plugin-react
Uses Babel (or oxc when used with Rolldown) to enable Fast Refresh.

@vitejs/plugin-react-swc
Uses SWC for a faster, Rust-based transformation pipeline.

3. React Compiler (Optional)

The React Compiler is not enabled by default due to its performance impact during development and build time.
To enable it, follow the official documentation:
https://react.dev/learn/react-compiler/installation

4. ESLint Configuration

Basic ESLint rules are included by default.

For production applications, TypeScript with type-aware linting is recommended.

Refer to the React + TypeScript template for integration details:
https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

## Tech Stack
Frontend
React
Vite
JavaScript
LLM
API
Firebase

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


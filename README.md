# React Learning Roadmap

This repository is a step-by-step React learning path for a developer who starts as a newbie and wants to grow toward senior-level thinking.

The guide is split into sessions. Each session has:

- a goal
- what to learn
- hands-on steps
- expected output
- a suggested git commit message

## How to use this repo

1. Study one session at a time.
2. Build the sample code by yourself after reading the session.
3. Commit your work when the session is complete.
4. Do not rush to advanced topics before the basics are stable.

## Learning path

- Session 1: Create and run a React project
- Session 2: Components, props, events, and reusable UI
- Session 3: Routing, layout, and page structure
- Session 4: State management, forms, and API basics
- Session 5: Response handling, authentication, force login, expired token
- Session 6: Advanced state optimization, MVVM, and scalable patterns
- Session 7: Linting, unit testing, and performance testing
- Session 8: Deploy, production readiness, and technical optimization

## Recommended stack for learning

- React
- Vite
- React Router
- Axios
- React Hook Form
- Zod
- Zustand
- TanStack Query
- ESLint
- Prettier
- Vitest
- React Testing Library
- Lighthouse

## Session 1: Create and run a React project

### Goal

Understand how a React project starts, how the folder structure works, and how to run the app locally.

### Learn first

- Node.js and npm
- what Vite does
- `src/main.jsx` and `src/App.jsx`
- development server
- build output

### Step by step

1. Install Node.js LTS.
2. Create a new project:

```bash
npm create vite@latest react-learning-app -- --template react
cd react-learning-app
npm install
```

3. Run the project:

```bash
npm run dev
```

4. Open the local URL shown in the terminal.
5. Read the generated files:
   - `index.html`
   - `src/main.jsx`
   - `src/App.jsx`
6. Change the page title and screen content.
7. Stop the server and run a production build:

```bash
npm run build
```

8. Preview the build:

```bash
npm run preview
```

### Expected output

- you can create a React project without copy-paste confusion
- you know the difference between `dev`, `build`, and `preview`
- you understand where the app starts rendering

### Suggested commit

`docs(session-1): add project setup and run guide for React + Vite`

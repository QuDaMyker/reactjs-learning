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

## Session 2: Components, props, events, and reusable UI

### Goal

Learn how React UIs are built from small components and how to reuse them safely.

### Learn first

- component as a function
- JSX
- props
- event handling
- conditional render
- list render with `map`
- basic folder structure

### Step by step

1. Create a `components` folder.
2. Start with simple UI parts:
   - `Button`
   - `Input`
   - `Card`
   - `Header`
3. Pass data from parent to child with props.
4. Add click events like `onClick`.
5. Render a list of cards from an array.
6. Add empty state UI when there is no data.
7. Extract repeated JSX into a reusable component.

### Example structure

```txt
src/
  components/
    Button.jsx
    Card.jsx
    Input.jsx
  pages/
  App.jsx
```

### Good habits

- use small components with one clear responsibility
- prefer clear prop names like `title`, `onSubmit`, `isLoading`
- avoid giant components with too much UI and logic mixed together

### Expected output

- you can break one screen into many small components
- you understand when to create a reusable component
- you know the difference between a page component and a shared component

### Suggested commit

`docs(session-2): add beginner guide for components props events and reusable UI`

## Session 3: Routing, layout, and page structure

### Goal

Learn how to build a multi-page React app without refreshing the browser.

### Learn first

- client-side routing
- route params
- nested routes
- shared layout
- not found page

### Step by step

1. Install React Router:

```bash
npm install react-router-dom
```

2. Create pages:
   - `HomePage`
   - `ProductsPage`
   - `ProductDetailPage`
   - `LoginPage`
   - `NotFoundPage`
3. Create a root layout with header, sidebar, and footer.
4. Configure routes with `createBrowserRouter` or `BrowserRouter`.
5. Add a dynamic route like `/products/:id`.
6. Use `Link` and `NavLink`.
7. Add a `404` page.

### Recommended structure

```txt
src/
  layouts/
    MainLayout.jsx
  pages/
    HomePage.jsx
    LoginPage.jsx
    ProductsPage.jsx
    ProductDetailPage.jsx
    NotFoundPage.jsx
  router/
    index.jsx
```

### Senior mindset

- keep route definition centralized
- separate layout from page content
- use route-based code splitting later for performance

### Expected output

- you can navigate between pages
- you can read route params
- you understand where to place shared layout code

### Suggested commit

`docs(session-3): add routing layout and page structure guide`

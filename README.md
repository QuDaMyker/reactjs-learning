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
5. Open [PROJECT_STEP_BY_STEP.md](/Users/danhphamquoc/MyData/github/react-learning/PROJECT_STEP_BY_STEP.md) to learn how this repository applies the roadmap in a real sample app.

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

## Session 4: State management, forms, and API basics

### Goal

Understand how data changes in React and how the UI stays in sync with user input and server data.

### Learn first

- `useState`
- lifting state up
- controlled inputs
- loading and error state
- basic API request flow

### Step by step

1. Start with local state:
   - counter
   - search input
   - modal open and close
2. Move shared state to the nearest common parent.
3. Build a form with:
   - name
   - email
   - password
4. Add validation with simple rules first.
5. Install API helper libraries:

```bash
npm install axios react-hook-form zod @hookform/resolvers
```

6. Fetch data from a public API.
7. Render:
   - loading state
   - success state
   - empty state
   - error state
8. Learn the difference between server state and UI state.

### Important rule

Do not put everything in one global store. New developers often over-share state too early.

### Suggested API flow

1. call API
2. show loading
3. receive data
4. normalize only if needed
5. update UI
6. handle error clearly

### Expected output

- you know when local state is enough
- you can submit forms and validate user input
- you can connect a page to an API

### Suggested commit

`docs(session-4): add state forms and api basics guide`

## Session 5: Response handling, authentication, force login, expired token

### Goal

Build a safer frontend that behaves correctly when the backend returns success, business errors, unauthorized access, or expired tokens.

### Learn first

- HTTP status codes
- access token and refresh token
- protected route
- request interceptor
- response interceptor

### Step by step

1. Define a clear API module:
   - `api/client.js`
   - `api/auth.js`
   - `api/user.js`
2. Store tokens in a controlled way.
3. Add Axios interceptors:
   - attach token before request
   - catch `401 Unauthorized`
   - redirect to login when refresh fails
4. Create a protected route wrapper.
5. Handle response states:
   - `200`: show data
   - `400`: show validation message
   - `401`: try refresh or force login
   - `403`: show permission denied
   - `500`: show fallback error UI
6. Clear sensitive state when logout happens.

### Force login and expired token flow

1. user opens protected page
2. app sends request with access token
3. backend returns `401`
4. app tries refresh token once
5. if refresh works, retry original request
6. if refresh fails, clear session and navigate to `/login`

### Important beginner note

Do not retry forever. Infinite retry loops are a common production bug.

### Recommended folders

```txt
src/
  api/
    client.js
    auth.js
  guards/
    ProtectedRoute.jsx
  services/
    tokenService.js
```

### Expected output

- you can design a clean login flow
- you know how to react to expired sessions
- you can protect routes and show the right error state

### Suggested commit

`docs(session-5): add authentication response handling and token expiry guide`

## Session 6: Advanced state optimization, MVVM, and scalable patterns

### Goal

Move from feature coding into maintainable architecture and performance-aware state design.

### Learn first

- global state vs local state
- derived state
- memoization
- selector pattern
- View and ViewModel separation

### Step by step

1. Split state types:
   - local UI state
   - shared client state
   - server state
2. Use Zustand for lightweight client state when needed:

```bash
npm install zustand
```

3. Use TanStack Query for server state:

```bash
npm install @tanstack/react-query
```

4. Avoid duplicated state:
   - do not copy server data into many local states
   - prefer selectors and derived values
5. Introduce MVVM:
   - View: UI only
   - ViewModel: page logic, actions, derived data
   - Model: API types, mappers, domain rules

### Example MVVM structure

```txt
src/
  modules/
    users/
      components/
      pages/
      view-models/
      services/
      models/
```

### Reusable component rules

- reusable components should be generic, not tied to one business screen
- business logic should stay outside shared UI
- prefer composition over too many boolean props

### Optimize state technically

- colocate state near where it is used
- avoid prop drilling when context or store is truly needed
- use selectors to reduce unnecessary rerenders
- debounce search input
- lazy load heavy routes
- split code by feature

### Expected output

- you can decide where state should live
- you can separate screen UI from business logic
- you understand how to scale a React codebase with less chaos

### Suggested commit

`docs(session-6): add mvvm reusable component and state optimization guide`

## Session 7: Linting, unit testing, and performance testing

### Goal

Learn how to protect quality before bugs reach production.

### Learn first

- lint vs format
- unit test vs integration test
- component test
- performance measurement

### Step by step

1. Install quality tools:

```bash
npm install -D eslint prettier vitest @testing-library/react @testing-library/jest-dom jsdom
```

2. Add lint rules for:
   - unused imports
   - inconsistent style
   - hooks rules
3. Create tests for:
   - render component
   - button click
   - form validation
   - loading and error state
4. Test a custom hook if it contains business logic.
5. Run tests in watch mode while coding.
6. Measure performance with:
   - React DevTools Profiler
   - Lighthouse
   - browser Performance tab

### What to test first

- utility functions
- form behavior
- API error state rendering
- auth redirect behavior
- important reusable components

### Performance red flags

- large rerender chains
- too much state at high tree levels
- expensive list rendering
- fetching the same data many times
- bundle size growing without control

### Expected output

- you can enforce code quality with linting
- you can write useful tests instead of only snapshot tests
- you can find slow screens with proper tools

### Suggested commit

`docs(session-7): add lint unit test and performance testing guide`

## Session 8: Deploy, production readiness, and technical optimization

### Goal

Understand how a React app moves from local development to a production environment.

### Learn first

- environment variables
- build command
- static hosting
- CI basics
- monitoring and logging

### Step by step

1. Prepare environment files:
   - `.env.development`
   - `.env.production`
2. Build the app:

```bash
npm run build
```

3. Deploy to one platform first:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
4. Add SPA route fallback configuration.
5. Confirm:
   - refresh still works on nested routes
   - API base URL is correct
   - source maps and secrets are handled safely
6. Add CI ideas:
   - install dependencies
   - run lint
   - run test
   - run build
7. Add monitoring later:
   - error tracking
   - analytics
   - web vitals

### Technical optimization checklist

- use route-level code splitting
- use image optimization
- virtualize long lists
- cache server state smartly
- prevent duplicate requests
- use skeleton loading for better UX
- keep bundle dependencies under review
- remove dead code and unused UI libraries
- document feature boundaries
- prefer consistent patterns over clever shortcuts

### External UI library guidance

You can learn faster with a UI library, but choose it carefully.

- for fast admin UI: Ant Design, MUI
- for flexible headless patterns: Radix UI, Headless UI
- for utility-first styling: Tailwind CSS

Rule for senior engineers:

- do not let the UI library control the whole architecture
- wrap third-party UI in your own shared components when needed

### From newbie to senior

### Newbie focus

- run project
- build components
- understand props and state
- call API
- handle loading and error

### Mid-level focus

- routing
- auth flow
- shared hooks
- reusable components
- testing
- code organization

### Senior focus

- architecture decisions
- state boundaries
- performance strategy
- design system thinking
- deployment safety
- maintainability over time

## Suggested long-term roadmap

1. Build a small CRUD app.
2. Add login and protected routes.
3. Add reusable form components.
4. Add React Query and optimize server state.
5. Refactor one feature into MVVM style.
6. Add tests and lint rules.
7. Deploy to production.
8. Review performance and bundle size.

## Final advice

- learn fundamentals before chasing advanced libraries
- do not treat every problem as a global state problem
- do not optimize too early, but always measure before optimizing
- keep commits small and meaningful
- write code that the next teammate can understand quickly

## GitHub Pages deploy

This repository now includes a GitHub Actions workflow for GitHub Pages deployment.

### How to enable

1. Push this repository to GitHub.
2. Open repository `Settings`.
3. Open `Pages`.
4. Set `Source` to `GitHub Actions`.
5. Push to `master` to trigger deployment.

### Important note

The app uses `HashRouter` so page navigation still works correctly on GitHub Pages without server-side route rewrites.

### Suggested commit

`docs(session-8): add deployment roadmap and senior optimization guidance`

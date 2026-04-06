# React Learning App Step by Step

This file explains how to use and expand the sample project inside this repository.

## 1. Install and run

```bash
npm install
npm run dev
```

Open the local Vite URL in your browser.

## 2. Explore the public pages

Open these routes first:

- `/`
- `/learning`
- `/build-steps`
- `/playground`

What to learn here:

- shared layout
- reusable components
- local state with `useState`
- list rendering
- route navigation

## 3. Login with the demo account

Open `/login` and use:

- Email: `student@react-learning.dev`
- Password: `123456`

What happens:

- form validation runs with React Hook Form + Zod
- login is sent through the API layer
- session is stored in Zustand + localStorage
- the app redirects to the protected page

## 4. Test protected routing

Open `/products`.

If you are not logged in:

- the guard redirects to `/login`

If you are logged in:

- the page fetches product data
- React Query manages server state
- the ViewModel hook shapes the page data

## 5. Test expired token flow

On `/products`:

1. Click `Expire access token`
2. Click `Refetch products`

What happens:

1. request goes out with an expired token
2. mock server returns `401`
3. Axios interceptor calls refresh
4. request retries once with a new token
5. if refresh fails, session is cleared and login is required

## 6. Understand the folder structure

```txt
src/
  api/                -> axios client and mock backend
  config/             -> env helpers
  guards/             -> route protection
  layouts/            -> app shell
  modules/            -> feature-first MVVM structure
  pages/              -> route pages
  providers/          -> React Query provider and bootstrap
  router/             -> router entry
  services/           -> token persistence and helpers
  shared/             -> reusable UI and shared data
  stores/             -> Zustand stores
  styles/             -> global styling
  test/               -> test setup
```

## 7. Build in learning order

### Session A: Foundation

- inspect `index.html`
- inspect `src/main.jsx`
- inspect `src/providers/AppProviders.jsx`
- inspect `src/App.jsx`

### Session B: Reusable UI

- inspect `src/shared/components/AppButton.jsx`
- inspect `src/shared/components/AppCard.jsx`
- inspect `src/shared/components/AppInput.jsx`
- change text and styles

### Session C: Routing and Layout

- inspect `src/layouts/MainLayout.jsx`
- inspect route pages in `src/pages`
- add one more page by yourself

### Session D: Local state

- inspect `src/pages/PlaygroundPage.jsx`
- add remove-item behavior
- add empty-state rendering

### Session E: Auth and API

- inspect `src/api/client.js`
- inspect `src/api/mockServer.js`
- inspect `src/stores/authStore.js`
- inspect `src/guards/ProtectedRoute.jsx`

### Session F: MVVM feature module

- inspect `src/modules/products/models/productModel.js`
- inspect `src/modules/products/services/productService.js`
- inspect `src/modules/products/view-models/useProductsViewModel.js`
- inspect `src/modules/products/pages/ProductsPage.jsx`

### Session G: Quality

- run `npm run lint`
- run `npm run test`
- add more tests for auth flow and page behavior

### Session H: Production thinking

- run `npm run build`
- run `npm run preview`
- review bundle size and route loading
- deploy to Vercel or Netlify

## 8. Suggested next tasks

- add a product detail route
- add a create-product form
- add toast notifications
- add route-level lazy loading
- add more unit tests
- add CI with lint, test, and build

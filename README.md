# Ponyracer Tutorial Project

This is a GitHub repository for Ponyracer, an simple application developed as part of a VueJS course by [Ninja Squad](https://vue-exercises.ninja-squad.com/). This application serves as a practical application to apply different concepts learned in the course.

## Features Implemented

- Responsive Navbar : Reducing the page size to a certain dimension collapses the navbar menu and a menu button appears allowing the user to toggle the hidden menu.
- Formatting Time : Displays the time remaining or ellapsed for each race in a user-friendly format.

## Concepts learned

- Vue Templating Syntax
- Unit testing, Code Coverage and E2E Tests
- Type Checking Using TypeScript
- Iterative Rendering using `v-for` directive
- Using Computed Properties (Composition API)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

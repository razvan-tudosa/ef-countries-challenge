This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the required dependencies by running the following command:

```bash
npm install
# or
yarn install
```

Then, you can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Project structure

### Components

`components` folder contains all the components needed throughout the app

### Config

We cand find here the theming setup for our app.

### Cypress

Here we have the Cypress setup and the tests which are located in the `e2e` folder.

### Pages

The app pages can be found as such:

- Homepage (Country Listing): `pages/index.tsx`
- Country Details: `pages/country/[name].tsx`

This folder also contains Next.js specific files like `_app.tsx` and `_document.tsx`.

### Public

Public assets if any.

### Services

There is a `services` folder that contains one service for data fetching called `countryService`. This abstracts away the usage of `axios`.

### Styles

Here we can find common styling and global styling for the app.

### Utils

Utility functions that we may need.

Currently there's only one fn `convertObjToArray` that should convert and object to an array as follows:

```js
  {
    "EUR":{
      "name":"Euro",
      "symbol":"€"
    }
  }

  // becomes this

  [
    {
      key: 'EUR',
      name 'Euro',
      symbol: '€'
    }
  ]
```

## E2E Tests

This project uses [Cypress](https://docs.cypress.io/) for E2E testing.

If you want to run the tests you can do so by using the following command:

```bash
npm run cy:open
# or
yarn cy:open
```

## Tech Used

- [Next.js](https://nextjs.org/docs) as a framework on top of [React](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/) for type safety, static code analysis and an overall better development experience.
- [Styled Components](https://styled-components.com/) for the CSS styling solution
- [Styled Icons](https://styled-icons.dev/) for icons
- [Axios](https://axios-http.com/docs/intro) for data fetching
- [React Semantic UI](https://react.semantic-ui.com/) for premade components
- [Cypress](https://docs.cypress.io/) for E2E testing

## Demo

This app has been deployed through [Vercel](https://vercel.com/) and can be seen in action here: https://ef-countries-challenge.vercel.app/

If you want to learn more about Deploying with Vercel check out [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

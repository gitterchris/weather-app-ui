# Weather App UI

This is the UI component of the Weather App. The project mainly uses the following:
* [React](https://reactjs.org)
* [Semantic UI React](https://react.semantic-ui.com)
* [Webpack](https://webpack.js.org)
* [Babel](https://babeljs.io)
* [SCSS](https://sass-lang.com)
* [Jest](https://jestjs.io) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Pre-requisities
* [NodeJS](https://nodejs.org/en/) version 15.2.1 or higher
* [Yarn](https://yarnpkg.com) version 1.22.5
* [Weather App Server](https://github.com/gitterchris/weather-app-server)

## Getting Started

### Clone the repo to your favorite development directory and install its dependencies.
```
git clone https://github.com/gitterchris/weather-app-ui.git
cd weather-app-ui
yarn
```

### Run

```
yarn build-dev
```

Make sure that you also run the [Weather App Server](https://github.com/gitterchris/weather-app-server) to retrieve the data. 

For production build: `yarn build`

### Test

```
yarn test-coverage
```

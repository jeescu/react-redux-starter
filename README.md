# React + Redux starter

Basic dependencies to get started with your React project using [Redux](http://redux.js.org/)

### Tools / Dependencies

Check [package.json](https://github.com/jeescu/react-redux-starter/blob/master/package.json)

Development tools
* [Webpack](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [Eslint](http://eslint.org/docs/user-guide/getting-started)

Helper tools
* [Immutable](https://github.com/facebook/immutable-js)
* [Lodash](https://github.com/lodash/lodash)

Test libraries
* [Mocha](https://mochajs.org/)
* [Expect](https://github.com/mjackson/expect)
* [Enzyme](https://github.com/airbnb/enzyme)

### Getting Started

Create a new project based on `react-redux-starter`.

#### Install from source

1. First, clone this project:

	```
	> git clone git@github.com:jeescu/react-redux-starter.git
	> cd <my-project-name>
	```

2. Install dependencies and start coding!

	```
	> npm install                   # Install project dependencies
	> npm start                     # Compile and launch
	```

#### Development

1. Start development

	```
	> npm start
	```
2. Run tests

	```
	> npm test
	```

#### Deployment

1. Bundle the app using webpack

	```
	> npm run build
	```

2. Run your production server

	```
	> npm run start:dist
	```
	
### Application Structure

```
├── build                    # All webpack build configuration
│   └── webpack              # Configuration files for environments
├── config                   # Project configuration settings
├── dist                     # Application build for production
├── server                   # Server side rendering express application
│   └── main.js              # Server environment-specific application entry point
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── main.js              # Application entry point bootstrap and rendering
│   ├── components           # All Reusable Presentational Components
│   ├── containers           # All Container Components
|   ├── reducers 	     # Pieces of state for store
│   │   └── index.js         # Combined reducers as a single state
│   ├── routes               # Application routing
│   │   └── index.js         # Routes entry point
│   ├── static               # Static assets (publicly viewable by url)
│   ├── store                # Redux state container with environment-specific configurations.
│   │   ├── createStore.js   # Create and instrument redux store
│   └── styles               # Global styles
└── tests                    # Unit tests
```

## Learning Resources

* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) by [Dan Abramov}(https://github.com/gaearon)
* [Modern React Redux](https://www.udemy.com/react-redux/learn/v4/overview] in (Udemy)[https://www.udemy.com)
* [Redux Documentation](http://redux.js.org/)

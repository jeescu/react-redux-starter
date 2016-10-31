import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import configureStore from './store';

const store = configureStore();
// Give initial states here
// store.dispatch(actionCreator)

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.querySelector('.container')
);

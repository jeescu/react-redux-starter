import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const storeWithMiddleware = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default storeWithMiddleware;
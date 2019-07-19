import { createStore , compose , applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
// import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
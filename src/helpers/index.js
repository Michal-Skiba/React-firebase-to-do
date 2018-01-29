import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

const defaultMiddlewares = [thunk, promiseMiddleware()];

const createMockStore = (middlewares = defaultMiddlewares, initialData = {}) =>
    configureStore(middlewares)(initialData);

export default createMockStore;

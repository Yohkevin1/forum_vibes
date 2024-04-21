import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { thunk } from './middleware';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
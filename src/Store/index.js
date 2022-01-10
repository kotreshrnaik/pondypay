import { createStore } from 'redux';
import itemReducer from './reducers';

export default createStore(itemReducer); 
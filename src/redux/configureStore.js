import { combineReducers, createStore } from 'redux';
import checkStatusReducer from './categories/Categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer,
});

const bookStore = createStore(rootReducer);

export default bookStore;

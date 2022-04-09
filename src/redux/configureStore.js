import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import checkStatusReducer from './categories/Categories';
import bookReducer, { getBooks } from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer,
});

const bookStore = createStore(rootReducer, applyMiddleware(thunk));
bookStore.dispatch(getBooks());

export default bookStore;

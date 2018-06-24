import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as form } from 'redux-form';
import todoReducer from './todo';

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  todos: todoReducer,
  form
});

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeEnhancers());
}

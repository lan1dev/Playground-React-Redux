import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from '../components/ToDoApp';
import { Provider } from 'react-redux';
import configureStore from '../../state';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ToDoApp />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

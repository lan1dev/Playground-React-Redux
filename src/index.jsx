import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import configrueStore from './state';
import ToDoApp from './views/components/ToDoApp';

const store = configrueStore();

/* eslint-disable no-unused-expressions */
injectGlobal`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import ToDoApp from './components/ToDoApp';

/* eslint-disable no-unused-expressions */
injectGlobal`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
`;

ReactDOM.render(<ToDoApp />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import ToDoApp from '../components/ToDoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToDoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
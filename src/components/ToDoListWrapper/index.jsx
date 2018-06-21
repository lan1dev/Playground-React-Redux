import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  children: PropTypes.node.isRequired
};

const ToDoListWrapper = ({ children }) => <div className="wrapper">{children}</div>;

ToDoListWrapper.propTypes = propTypes;
export default ToDoListWrapper;

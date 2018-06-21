import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  children: PropTypes.string.isRequired
};

const Button = ({ children }) => (
  <button className="btn-primary" type="submit">
    {children}
  </button>
);

Button.propTypes = propTypes;
export default Button;

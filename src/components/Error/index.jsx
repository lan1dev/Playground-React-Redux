import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  children: PropTypes.string.isRequired
};

const Error = ({ children }) => <p className="error">{children}</p>;

Error.propTypes = propTypes;
export default Error;

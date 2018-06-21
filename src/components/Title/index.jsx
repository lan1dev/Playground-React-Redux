import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  children: PropTypes.string.isRequired
};

const Title = ({ children }) => <h1 className="title">{children}</h1>;

Title.propTypes = propTypes;
export default Title;

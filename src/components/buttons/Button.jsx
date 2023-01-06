import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ enable, disable,hover,backgroundColor, size, label,...props}) => {
  const mode = disable? 'storybook-fillbutton--disabled':hover?'storybook-fillbutton--hover': 'storybook-fillbutton--enabled';
  return (
    <button
      type="button" 
      className={['storybook-fillbutton', `storybook-fillbutton--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
     {label}
    </button>
  );
};

Button.propTypes = {
  enable: PropTypes.bool,
  disable: PropTypes.bool,
  hover: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  enable: false,
  disable:false,
  hover:false,
  size: 'medium',
  onClick: undefined,
};
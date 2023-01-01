import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

export const Inputbox = ({ normal,required,success,password, color,icon, size,placeholder,label,type,onName,onMail,  ...props }) => {
  //onChange : func
 const mode =  required ? 'storybook-input--required': success ? 'storybook-input--success':password ? 'storybook-input--password':'storybook-input--normal';
  return (
    <><input
          type={type}
          placeholder={placeholder}
          className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
          onChange={e => onName(e. target. value)}
          // name 
      >
      </input> <br></br>
      <input
          type={type}
          placeholder={placeholder}
          className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
          onChange={e => onMail(e. target. value)}
          // name 
      >
      </input>
      <span className={`storybook-input--${color}`}>{label} </span><span className={`storybook-input--icon`}>{icon}</span></>
  );
};

Inputbox.propTypes = {
  normal:PropTypes.bool,
  required:PropTypes.bool,
  success: PropTypes.bool,
  password: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string.isRequired,
  icon:PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func
};

Inputbox.defaultProps = {
  normal:true,
  required:false,
  success: false,
  password: false,
  size: 'medium',
  placeholder:'Text',
};
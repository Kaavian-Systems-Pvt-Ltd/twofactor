import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../buttons/Button'
import './Otp.css';

export const Otppass = ({ enable, color,icon, size,placeholder,label,type,onPass,onResend,  ...props }) => {
  //onChange : func
 const mode =  enable ?  'storybook-fillbutton--enabled':'storybook-input--required'; 
  return (
    <><input
          type={type}
          placeholder='Enter the OTP'
          className={['storybook-input', `storybook-input--${size}`, mode].join(' ')}
          onChange={e => onResend(e.target.value)}
      >
      </input><br></br><br></br>
      <div className='storybook-button--divbutton'><Button primary size="small"  label="Submit" /></div>
      <div className='storybook-button-otp'><Button secondary size="medium"  label="Resend OTP" /></div>
      </>
  );
};

Otppass.propTypes = {
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

Otppass.defaultProps = {
  normal:true,
  // required:false,
  // success: false,
  // password: false,
  size: 'large',
  placeholder:'Text',
};
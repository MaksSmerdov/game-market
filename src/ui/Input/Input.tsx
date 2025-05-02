import React, {InputHTMLAttributes, useContext} from 'react';
import styles from './Input.module.scss';
import {ResponsiveContext} from "../../context/ResponsiveContext.tsx";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({className = '', error = false, ...props}) => {
  const {isMobile} = useContext(ResponsiveContext);
  const sizeClass = isMobile ? styles['input--mobile'] : styles['input--desktop'];

  const inputClasses = [
    styles.input,
    sizeClass,
    error ? styles.error : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      className={inputClasses}
      aria-invalid={error}
      {...props}
    />
  );
};

export default Input;

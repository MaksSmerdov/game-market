import React, {useContext, ButtonHTMLAttributes} from 'react';
import styles from './Button.module.scss';
import {ResponsiveContext} from "../../../context/ResponsiveContext.tsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({
                                         children,
                                         variant = 'primary',
                                         ...props
                                       }) => {
  const {isMobile} = useContext(ResponsiveContext);
  const sizeClass = isMobile
    ? styles['button--mobile']
    : styles['button--desktop'];

  const classes = [
    styles.button,
    styles[`button--${variant}`],
    sizeClass,
    'btn-reset',
  ].join(' ');

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;

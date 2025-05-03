import React, { ChangeEvent, useContext } from 'react';
import styles from './Checkbox.module.scss';
import okSrc from '../../../assets/svg/ok.svg';
import { ResponsiveContext } from '../../../context/ResponsiveContext.tsx';

export interface CheckboxProps {
  checked?: boolean;
  error?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, error = false, label, onChange }) => {
  const { isMobile } = useContext(ResponsiveContext);
  const sizeClass = isMobile ? styles['checkbox--mobile'] : styles['checkbox--desktop'];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const mods = [
    styles['checkbox'],
    sizeClass,
    checked && !error ? styles['checkbox--checked'] : '',
    error ? styles['checkbox--error'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={mods}>
      <label className={styles['checkbox__container']}>
        <input
          type="checkbox"
          className={styles['checkbox__input']}
          checked={checked}
          onChange={handleChange}
        />
        <span className={styles['checkbox__box']}>
          {checked && !error && <img src={okSrc} alt="ok" className={styles['checkbox__icon']} />}
        </span>
      </label>
      <span className={styles['checkbox__label']}>{label}</span>
    </div>
  );
};

export default Checkbox;

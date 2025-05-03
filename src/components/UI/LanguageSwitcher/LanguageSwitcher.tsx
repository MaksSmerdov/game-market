import React from 'react';
import styles from './LanguageSwitcher.module.scss';

export type LangCode = 'RU' | 'EN';

export interface LanguageSwitcherProps {
  value: LangCode | string;
  options?: LangCode[];
  onChange: (lang: LangCode) => void;
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  value,
  options = ['RU', 'EN'],
  onChange,
  className = '',
}) => {
  return (
    <div className={`${styles['switcher']} ${className}`}>
      {options.map((lang) => (
        <button
          key={lang}
          type="button"
          className={`
            ${styles['switcher__button']}
            ${value === lang ? styles['switcher__button--active'] : ''}
          btn-reset`}
          onClick={() => {
            if (lang !== value) onChange(lang);
          }}>
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

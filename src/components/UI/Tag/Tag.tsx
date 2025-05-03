import React, { ReactNode } from 'react';
import styles from './Tag.module.scss';
import infoSrc from '../../../assets/svg/info.svg';

export interface TagProps {
  variant?: 'timer';
  children: ReactNode;
}

const Tag: React.FC<TagProps> = ({ variant, children }) => (
  <span
    className={`
      ${styles['tag']}
      ${styles[`tag--${variant}`]}
    `}>
    {children}
    <img className={`${styles['tag-info']}`} src={infoSrc} alt="info" />
  </span>
);

export default Tag;

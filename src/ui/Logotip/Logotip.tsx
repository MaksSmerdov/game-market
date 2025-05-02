import React from "react";
import styles from './Logotip.module.scss'
import LogoSrc from "../../assets/svg/logo.svg";

const Logotip: React.FC = () => {
  return (
    <header className={`${styles['header']}`}>
      <img className={`${styles['header__logo']}`} src={LogoSrc} alt="Logo"/>
    </header>
  );
};

export default Logotip;
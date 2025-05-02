import React from 'react';
import styles from './StartPage.module.scss';
import Auth from "../../components/Auth/Auth.tsx";
import Logotip from "../../ui/Logotip/Logotip.tsx";

const StartPage: React.FC = () => (
  <div className={`${styles['page']}`}>
    <Logotip/>
    <main className={`${styles['main']}`}>
      <Auth/>
    </main>
  </div>
);

export default StartPage;

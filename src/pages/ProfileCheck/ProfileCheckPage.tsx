import React, {useContext, useState} from 'react';
import GameCard from '../../components/GameCard/GameCard.tsx';
import Profile from '../../components/Profile/Profile.tsx';
import styles from './ProfileCheckPage.module.scss';
import {ResponsiveContext} from "../../context/ResponsiveContext.tsx";
import Logotip from "../../ui/Logotip/Logotip.tsx";

const ProfileCheckPage: React.FC = () => {
  const {isMobile} = useContext(ResponsiveContext);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section
      className={`
        ${styles["check__page"]}
        ${isSuccess ? styles["check__page--success"] : ""}
      `}
    >
      <Logotip/>
      {isMobile ? (
        <Profile onSuccess={setIsSuccess}/>
      ) : (
        <>
          <GameCard/>
          <Profile onSuccess={setIsSuccess}/>
        </>
      )}
    </section>
  );
};

export default ProfileCheckPage;

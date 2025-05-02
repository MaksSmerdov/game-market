import React, {useState} from "react";
import styles from "./Footer.module.scss";
import LanguageSwitcher from "../../ui/LanguageSwitcher/LanguageSwitcher";
import Telegram from "../../ui/Telegram/Telegram";

interface FooterProps {
  mode?: "default" | "success";
}

export const Footer: React.FC<FooterProps> = ({mode = "default"}) => {
  const [lang, setLang] = useState("EN");

  return (
    <div className={styles["footer"]}>
      <div
        className={`
          ${styles["footer-links"]}
          ${mode === "success" ? styles["footer-links--stack"] : ""}
        `}
      >
        {mode === "default" && (
          <a className={styles["footer-link"]} href="mailto:seller@example.com">
            Связаться с продавцом
          </a>
        )}

        {mode === "success" && (
          <>
            <a
              className={styles["footer-link"]}
              href="https://store.steampowered.com/account/licenses/"
              target="_blank"
              rel="noreferrer"
            >
              Проверить версию издания
            </a>
            <a
              className={styles["footer-link"]}
              href="steam://nav/games/details/123456"
            >
              Посмотреть игру
            </a>
          </>
        )}
      </div>
      <div className={styles["footer-settings"]}>
        <LanguageSwitcher value={lang} onChange={setLang}/>
        <Telegram>У нас раздачи игр! Подпишись</Telegram>
      </div>
    </div>
  );
};

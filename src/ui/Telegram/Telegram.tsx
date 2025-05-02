import React, {ReactNode} from "react";
import styles from "./Telegram.module.scss";
import telegramSrc from "../../assets/svg/telegram.svg";

interface TelegramProps {
  children: ReactNode;
  className?: string;
}

const Telegram: React.FC<TelegramProps> = ({
                                             children,
                                             className = "",
                                           }) => {
  return (
    <a
      href="https://t.me/GPay_Market"
      target="_blank"
      rel="noreferrer"
      className={`${styles["telegram"]} ${className}`}
    >
      <div className={styles["telegram__tooltip"]}>{children}</div>

      <img
        src={telegramSrc}
        alt="Telegram"
        className={styles["telegram__icon"]}
      />
    </a>
  );
};

export default Telegram;

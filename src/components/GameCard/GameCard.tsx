import React from 'react';
import styles from './GameCard.module.scss';
import coverImg from '../../assets/card.png';
import Tag from '../UI/Tag/Tag.tsx';

const GameCard: React.FC = () => (
  <div className={styles['game-card']}>
    <div className={styles['game-card__cover-wrapper']}>
      <img src={coverImg} alt="Atomic Heart" className={styles['game-card__cover-image']} />
    </div>

    <div className={styles['game-card__info']}>
      <h2 className={styles['game-card__main-title']}>Atomic Heart - Enchantment Under the Sea</h2>
      <div className={styles['game-card__meta']}>
        <span className={styles['game-card__order']}>Заказ #99999999</span>
        <div className={styles['game-card__tags']}>
          <Tag>DLC</Tag>
          <Tag variant="timer">Время на активацию 00:00:00</Tag>
        </div>
      </div>
      <p
        className={
          styles['game-card__description']
        }>{`Для активации DLC нужна\nосновная игра на аккаунте`}</p>
    </div>
  </div>
);

export default GameCard;

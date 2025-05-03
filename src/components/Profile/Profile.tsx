import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.scss';
import avatarBefore from '../../assets/svg/test.svg';
import avatarSuccess from '../../assets/svg/success.svg';
import Button from '../UI/Button/Button.tsx';
import Tag from '../UI/Tag/Tag.tsx';
import { Footer } from '../Footer/Footer';

interface ProfileProps {
  onSuccess?: (val: boolean) => void;
}

const Profile: React.FC<ProfileProps> = ({ onSuccess }) => {
  type Stage = 'initial' | 'waiting' | 'success';

  const [stage, setStage] = useState<Stage>('initial');
  const navigate = useNavigate();

  useEffect(() => {
    if (stage === 'waiting') {
      const id = setTimeout(() => setStage('success'), 10000);
      return () => clearTimeout(id);
    }
  }, [stage]);

  useEffect(() => {
    onSuccess?.(stage === 'success');
  }, [stage, onSuccess]);

  const handleConfirm = () => setStage('waiting');
  const handleGoHome = () => navigate('/');

  const isSuccess = stage === 'success';

  const headerTitle = isSuccess ? 'Удачная покупка' : 'Проверка профиля';

  const avatarSrc = isSuccess ? avatarSuccess : avatarBefore;

  const mainText = isSuccess
    ? 'Спасибо за покупку товара в нашем магазине! Будем рады Вашему отзыву, обращайтесь еще!'
    : 'Steam никнейм покупателя. Проверьте перед покупкой!';

  return (
    <div className={styles['profile']}>
      <div className={styles['profile__mobile--header']}>
        {!isSuccess && 'Для активации DLC нужна\nосновная игра на аккаунте'}
      </div>
      <div className={styles['profile__header']}>
        <h1 className={styles['profile__header-title']}>{headerTitle}</h1>
        <img className={styles['profile__header-img']} src={avatarSrc} alt="avatar" />
        {!isSuccess && (
          <div className={styles['profile__mobile--info']}>
            <div className={styles['profile__mobile--info-tags']}>
              <Tag>DLC</Tag>
              <Tag variant="timer">Время на активацию 00:00:00</Tag>
            </div>
            <div className={styles['profile__mobile--info-description']}>
              <h2 className={styles['profile__mobile--title']}>
                Atomic Heart - Enchantment Under the Sea
              </h2>
              <span className={styles['profile__mobile--order']}>Заказ #99999999</span>
            </div>
          </div>
        )}

        <div className={styles['profile__header-description']}>
          <p className={styles['profile__header-description--text']}>{mainText}</p>

          {!isSuccess && (
            <a
              className={styles['profile__header-description--link']}
              href="https://steamcommunity.com/"
              target="_blank"
              rel="noreferrer">
              https://steamcommunity.com/profiles/steamid64
            </a>
          )}
        </div>

        <div className={styles['profile__controls']}>
          {stage === 'initial' && <Button onClick={handleConfirm}>Это мой аккаунт</Button>}

          {stage !== 'success' && (
            <Button variant="secondary" onClick={handleGoHome}>
              Сменить аккаунт
            </Button>
          )}

          {isSuccess && (
            <>
              <Button onClick={handleGoHome}>Оставить отзыв</Button>
              <Button variant="secondary" onClick={handleGoHome}>
                Главная
              </Button>
            </>
          )}
        </div>
      </div>

      <Footer mode={isSuccess ? 'success' : 'default'} />

      {isSuccess && (
        <button
          className={`${styles['profile__close']} btn-reset`}
          onClick={handleGoHome}
          aria-label="Закрыть">
          <span className={styles['profile__close-icon']}>✕</span>
          <span className={styles['profile__close-text']}>Закрыть</span>
        </button>
      )}
    </div>
  );
};

export default Profile;

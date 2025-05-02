import React, {useState, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Auth.module.scss';
import Button from "../UI/Button/Button.tsx";
import Input from "../UI/Input/Input.tsx";
import Checkbox from "../UI/Checkbox/Checkbox.tsx";
import Toast from "../UI/Toast/Toast.tsx";
import {Footer} from '../Footer/Footer';

const Auth: React.FC = () => {
  const [code, setCode] = useState('');
  const [isHuman, setIsHuman] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let hasErr = false;

    if (code.trim() === '') {
      setInputError(true);
      setShowErrorToast(true);
      hasErr = true;
    }
    if (!isHuman) {
      setCheckboxError(true);
      hasErr = true;
    }
    if (hasErr) return;

    navigate('/profile');
  };

  return (
    <form className={styles['auth']} onSubmit={handleSubmit}>
      {showErrorToast && (
        <div className={`${styles['toast']}`}>
          <Toast
            message={`Некорректный код заказа.\nПроверьте код ещё раз.`}
            onClose={() => setShowErrorToast(false)}
            type="error"
          />
        </div>
      )}

      <h1 className={styles['auth__title']}>
        {`Введите уникальный\nкод заказа`}
      </h1>

      <div className={styles['auth__body']}>
        <div className={styles['auth__body-controls']}>
          <Input
            type="text"
            placeholder="Введите уникальный код"
            value={code}
            onChange={e => {
              setCode(e.target.value);
              if (inputError) {
                setInputError(false);
                setShowErrorToast(false);
              }
            }}
            error={inputError}
          />
          <Button type="submit">Подтвердить</Button>
        </div>

        <Checkbox
          checked={isHuman}
          error={checkboxError}
          label="Я не робот"
          onChange={checked => {
            setIsHuman(checked);
            if (checkboxError) setCheckboxError(false);
          }}
        />
      </div>

      <Footer/>
    </form>
  );
};

export default Auth;

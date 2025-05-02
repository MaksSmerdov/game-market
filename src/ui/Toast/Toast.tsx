import React, {useEffect} from 'react';
import styles from './Toast.module.scss';

export interface ToastProps {
  message: string;
  type?: 'error' | 'success';
  duration?: number;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({
                                       message,
                                       type = 'error',
                                       duration = 3000,
                                       onClose
                                     }) => {

  useEffect(() => {
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
    </div>
  );
};

export default Toast;

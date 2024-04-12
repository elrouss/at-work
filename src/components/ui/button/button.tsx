import clsx from 'clsx';
import React from 'react';
import styles from './button.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extraClass?: string;
}

export const Button = ({
  extraClass,
  children,
  type,
  disabled,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={clsx(styles.button, extraClass)}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

import clsx from 'clsx';
import React from 'react';
import styles from './button-icon.module.scss';
import { Svg } from '@/components/common/svg/svg';

interface IButtonIcon extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconName: string;
  ariaLabel?: string;
  label?: string;
  extraClass?: string;
}

export const ButtonIcon = ({
  extraClass,
  iconName,
  ariaLabel,
  label,
  onClick,
}: IButtonIcon) => {
  return (
    <button
      className={clsx(styles.button, extraClass)}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <Svg name={iconName} />
      {label && <span>{label}</span>}
    </button>
  );
};

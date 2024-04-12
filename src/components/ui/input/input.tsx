import React, { useRef } from 'react';
import styles from './input.module.scss';
import { ButtonIcon } from '../button-icon/button-icon';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  error?: string;
  value: string;
  label?: string;
  onButtonClick: (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => void;
}

export const Input = ({
  id,
  type,
  label,
  placeholder,
  name,
  value,
  readOnly,
  autoComplete,
  required,
  disabled,
  error,
  onChange,
  onButtonClick,
}: IInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          id={id}
          type={type || 'text'}
          placeholder={placeholder}
          name={name}
          value={value || ''}
          readOnly={readOnly}
          autoComplete={autoComplete}
          required={required}
          disabled={disabled}
          onChange={onChange}
        />
        <ButtonIcon
          extraClass={styles.button}
          iconName="cross"
          ariaLabel="Очистить поле"
          onClick={(e) => {
            inputRef.current?.focus();
            onButtonClick(e);
          }}
        />
      </div>
      <span className={styles.error}>{error}</span>
    </div>
  );
};

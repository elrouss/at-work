import React from 'react';
import styles from './category.module.scss';

export interface ICategoryProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
}

export const Category = ({
  name,
  value,
  placeholder,
  readOnly,
  autoComplete,
  required,
  disabled,
  onChange,
}: ICategoryProps) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="text"
        name={name}
        value={value || ''}
        placeholder={placeholder}
        readOnly={readOnly}
        autoComplete={autoComplete}
        required={required}
        disabled={disabled}
        onChange={onChange}
      />
    </label>
  );
};

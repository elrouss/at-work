import React from 'react';
import styles from './user-main-info.module.scss';
import { TitleWithBorder } from '../title-with-border/title-with-border';
import { Button } from '@/components/ui/button/button';
import { IInputProps, Input } from '@/components/ui/input/input';
import { IFormErrors, IFormValues } from '@/hooks/useFormWithValidation';

interface IUserMainInfo {
  title?: string;
  inputs: Omit<IInputProps, 'onButtonClick'>[];
  values: IFormValues;
  errors: IFormErrors;
  buttonText: string;
  isValid: boolean;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  onButtonClick: (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => void;
}

export const UserMainInfo = ({
  title,
  inputs,
  values,
  errors,
  buttonText,
  isValid,
  handleChange,
  onButtonClick,
}: IUserMainInfo) => {
  return (
    <div className={styles.wrapper}>
      {title && <TitleWithBorder title={title} tag="h2" />}
      {Boolean(inputs?.length) && (
        <div className={styles.inputs}>
          {inputs.map((input, i) => (
            <Input
              key={i}
              {...{
                ...input,
                value: values[input.name],
                error: errors[input.name],
                onChange: handleChange,
                onButtonClick,
              }}
            />
          ))}
        </div>
      )}
      <Button extraClass={styles.button} type="submit" disabled={!isValid}>
        {buttonText}
      </Button>
    </div>
  );
};

import React, { useState, useCallback } from 'react';

export interface IFormValues {
  [key: string]: string;
}

export interface IFormErrors {
  [key: string]: string;
}

export default function useFormWithValidation() {
  const [values, setValues] = useState<IFormValues>({});
  const [errors, setErrors] = useState<IFormErrors>({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name, value } = target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage.slice(0, -1) });
    setIsValid(target.closest('form')!.checkValidity());
  };

  const resetInput = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    const input = e.currentTarget.previousSibling;
    if (!input || !(input instanceof HTMLInputElement)) return;

    setValues({ ...values, [input.name]: '' });
    setErrors({ ...errors, [input.name]: 'Заполните это поле' });
    setIsValid(Object.values(errors).some((error) => Boolean(error.length)));
  };

  const resetForm = useCallback(
    (
      newValues: IFormValues = {},
      newErrors: IFormErrors = {},
      newIsValid: boolean = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors,
    isValid,
    setValues,
    handleChange,
    setIsValid,
    resetInput,
    resetForm,
  };
}

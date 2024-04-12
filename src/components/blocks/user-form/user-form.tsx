import React, { useEffect, useState } from 'react';
import styles from './user-form.module.scss';
import { UserAdditionalInfo } from '../user-additional-info/user-additional-info';
import { UserMainInfo } from '../user-main-info/user-main-info';
import { ICategoryProps } from '@/components/ui/category/category';
import { IInputProps } from '@/components/ui/input/input';
import { ModalStatus } from '@/components/ui/modal-status/modal-status';
import { ModalWrapper } from '@/components/ui/modal-wrapper/modal-wrapper';
import { handleFormInitialState } from '@/helpers/handleFormInitialState';
import useFormWithValidation from '@/hooks/useFormWithValidation';
import { useAppDispatch } from '@/services/app/hooks';
import { IUserProfile } from '@/services/features/user-profile/types';
import { updateUserData } from '@/services/features/users/slice';
import { IModalStatus } from '@/types';

interface IUserFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  selectedUser: IUserProfile;
  categories: ICategoryProps[];
  inputs: Omit<IInputProps, 'onButtonClick'>[];
  buttonText: string;
  modal: IModalStatus;
}

export const UserForm = ({
  title,
  selectedUser,
  categories,
  inputs,
  buttonText,
  modal,
}: IUserFormProps) => {
  const dispatch = useAppDispatch();
  const {
    values,
    errors,
    isValid,
    setValues,
    handleChange,
    setIsValid,
    resetInput,
  } = useFormWithValidation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  useEffect(() => {
    setValues(
      handleFormInitialState([
        ...inputs.map((i) => ({ ...i, value: selectedUser[i.name as 'name'] })),
        ...categories.map((c) => ({
          ...c,
          value: selectedUser[c.name as 'name'],
        })),
      ])
    );
    setIsValid(true);
  }, []);

  const onButtonClick = (
    e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>
  ) => {
    e.stopPropagation();
    resetInput(e);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(updateUserData({ ...selectedUser, ...values }));
      setIsSuccess(true);
    } catch (_) {
      setIsSuccess(false);
    } finally {
      setIsModalShown(true);
      setTimeout(() => setIsModalShown(false), 4000);
    }
  };

  return (
    <>
      <form className={styles.form} noValidate onSubmit={onSubmit}>
        <UserAdditionalInfo
          title={title}
          selectedUser={selectedUser}
          categories={categories}
          values={values}
          handleChange={handleChange}
        />
        <UserMainInfo
          title={title}
          inputs={inputs}
          values={values}
          errors={errors}
          buttonText={buttonText}
          isValid={isValid}
          handleChange={handleChange}
          onButtonClick={onButtonClick}
        />
      </form>

      <ModalWrapper
        id={modal.id}
        isShown={isModalShown}
        handleClose={() => setIsModalShown(false)}
      >
        <ModalStatus title={isSuccess ? modal.successMsg : modal.errorMsg} />
      </ModalWrapper>
    </>
  );
};

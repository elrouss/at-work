import React from 'react';
import styles from './user-additional-info.module.scss';
import { TitleWithBorder } from '../title-with-border/title-with-border';
import { IUserCardProps } from '../user-card/user-card';
import { Category, ICategoryProps } from '@/components/ui/category/category';
import { IFormValues } from '@/hooks/useFormWithValidation';

interface IUserAdditionalInfo {
  title?: string;
  selectedUser: IUserCardProps;
  categories: ICategoryProps[];
  values: IFormValues;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const UserAdditionalInfo = ({
  title,
  selectedUser,
  categories,
  values,
  handleChange,
}: IUserAdditionalInfo) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={selectedUser.img}
        alt="Аватар пользователя"
      />
      <div className={styles.categories}>
        {title && <TitleWithBorder title={title} tag="h3" />}
        {Boolean(categories?.length) &&
          categories.map((category, i) => (
            <Category
              key={i}
              {...{
                ...category,
                value: values[category.name],
                onChange: handleChange,
              }}
            />
          ))}
      </div>
    </div>
  );
};

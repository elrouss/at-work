import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './user-card.module.scss';
import { ButtonIcon } from '@/components/ui/button-icon/button-icon';
import { Dropdown } from '@/components/ui/dropdown/dropdown';
import { useAppDispatch } from '@/services/app/hooks';
import { setInitialUserData } from '@/services/features/user-profile/slice';
import {
  archiveUser,
  unarchiveUser,
  hideUser,
} from '@/services/features/users/slice';
import { IUsersDataExtended } from '@/services/features/users/types';

export const UserCard = (data: IUsersDataExtended) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    id,
    img,
    username,
    company: { name },
    address: { city },
    isArchived = false,
  } = data;

  const onBtnMoreClick = () => {
    setIsDropdownShown((prevState) => !prevState);
  };

  return (
    <article className={clsx(styles.card, { [styles.archive]: isArchived })}>
      <img className={styles.img} src={img} alt="Профиль пользователя" />
      <div className={styles.content}>
        <header className={styles.header}>
          <div className={styles.info}>
            <h3 className={styles.title}>{username}</h3>
            <p className={styles.company}>{name}</p>
          </div>
          <div className={styles.dropdownWrapper}>
            <ButtonIcon
              extraClass={styles.button}
              iconName="more"
              ariaLabel="Показать/скрыть выпадающее меню"
              onClick={onBtnMoreClick}
            />
            <Dropdown
              list={
                isArchived
                  ? [
                      {
                        label: 'Активировать',
                        onClick: () => dispatch(unarchiveUser(data)),
                      },
                    ]
                  : [
                      {
                        label: 'Редактировать',
                        onClick: () => {
                          dispatch(setInitialUserData(data));
                          navigate(`/${id}`);
                        },
                      },
                      {
                        label: 'Архивировать',
                        onClick: () => dispatch(archiveUser(data)),
                      },
                      {
                        label: 'Скрыть',
                        onClick: () => dispatch(hideUser(data)),
                      },
                    ]
              }
              isShown={isDropdownShown}
              extraClass={clsx(styles.dropdown, {
                [styles.dropdown_visible]: isDropdownShown,
              })}
            />
          </div>
        </header>
        <footer className={styles.footer}>
          <p className={styles.city}>{city}</p>
        </footer>
      </div>
    </article>
  );
};

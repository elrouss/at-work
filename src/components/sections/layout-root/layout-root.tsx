import { ReactNode, useEffect, useState } from 'react';
import { fetchUsersData } from '@/api/fetchUsersData';
import { Preloader } from '@/components/common/preloader/preloader';
import { getUsersData } from '@/helpers/data/getUsersData';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAppDispatch } from '@/services/app/hooks';
import { setInitialUsers } from '@/services/features/users/slice';

interface ILayoutProps {
  children?: ReactNode;
}

let hadInitialDataRequest = false;
let hasInitiallyLoaded = false;

export const LayoutRoot = ({ children }: ILayoutProps) => {
  useScrollToTop();

  const [isAppLoaded, setIsAppLoaded] = useState(hasInitiallyLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (hadInitialDataRequest) return;

    const fetchData = async () => {
      try {
        const data = await fetchUsersData(6);

        dispatch(setInitialUsers(getUsersData(data)));
      } catch (e) {
        console.error(e);
      } finally {
        hadInitialDataRequest = true;
        hasInitiallyLoaded = true;

        // Для задержки анимации прелоадера
        setTimeout(() => setIsAppLoaded(hasInitiallyLoaded), 2000);
      }
    };

    fetchData();
  }, []);

  return <div>{isAppLoaded ? children : <Preloader />}</div>;
};

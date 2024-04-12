import { ReactNode, useEffect, useState } from 'react';
import { Preloader } from '@/components/common/preloader/preloader';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import { useAppDispatch, useAppSelector } from '@/services/app/hooks';
import { error } from '@/services/features/users/selectors';
import { fetchUsersData } from '@/services/features/users/slice';

interface ILayoutProps {
  children?: ReactNode;
}

let hadInitialDataRequest = false;
let hasInitiallyLoaded = false;

export const LayoutRoot = ({ children }: ILayoutProps) => {
  useScrollToTop();

  const [isAppLoaded, setIsAppLoaded] = useState(hasInitiallyLoaded);
  const dispatch = useAppDispatch();

  const statusError = useAppSelector(error);

  useEffect(() => {
    if (hadInitialDataRequest) return;

    const fetchData = async () => {
      try {
        dispatch(fetchUsersData());
      } catch (_) {
        console.error(statusError);
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

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IUserCardProps } from '@/components/blocks/user-card/user-card';
import { UserForm } from '@/components/blocks/user-form/user-form';
import { Header } from '@/components/common/header/header';
import { LayoutAnimation } from '@/components/sections/layout-animation/layout-animation';
import { LayoutInner } from '@/components/sections/layout-inner/layout-inner';
import { LayoutRoot } from '@/components/sections/layout-root/layout-root';
import { getJsonData } from '@/helpers/data/getJsonData';
import { useAppSelector, useAppDispatch } from '@/services/app/hooks';
import { getUserProfileData } from '@/services/features/user-profile/selectors';
import { setInitialUserData } from '@/services/features/user-profile/slice';
import { getActiveUsers } from '@/services/features/users/selectors';

let json = null as any;
getJsonData('user-profile').then((data) => (json = data));

export const UserProfile = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const users = useAppSelector(getActiveUsers);
  const selectedUser = useAppSelector(getUserProfileData) as IUserCardProps;

  useEffect(() => {
    if (selectedUser) return;

    dispatch(
      setInitialUserData(
        users.find(
          (user) => user.id === Number(location.pathname.slice(1))
        ) as IUserCardProps
      )
    );
  }, [users]);

  return (
    <LayoutRoot>
      <Header />
      <LayoutAnimation>
        <main>
          <LayoutInner topIndent="s" hasButtonBack>
            {selectedUser && <UserForm selectedUser={selectedUser} {...json} />}
          </LayoutInner>
        </main>
      </LayoutAnimation>
    </LayoutRoot>
  );
};
import { IUsersData } from '@/api/fetchUsersData';
import { user as mockUser } from '@/assets/mock/user';
import { IUserCardProps } from '@/components/blocks/user-card/user-card';

export interface IUsersDataExtended extends IUsersData {
  img: string;
}

export const getUsersData = (data: IUsersData[]): IUserCardProps[] => {
  return data.map((user) => {
    const filterUserData: Partial<IUserCardProps> = Object.create({});

    filterUserData.id = user.id;
    filterUserData.name = user.name;
    filterUserData.username = user.username;
    filterUserData.city = user.address.city;
    filterUserData.company = user.company.name;
    filterUserData.email = user.email;
    filterUserData.phone = user.phone;
    filterUserData.img = mockUser.avatar;

    return filterUserData as IUserCardProps;
  });
};

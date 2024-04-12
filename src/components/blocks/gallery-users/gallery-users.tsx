import styles from './gallery-users.module.scss';
import { UserCard } from '../user-card/user-card';
import { IUsersDataExtended } from '@/services/features/users/types';

interface IGalleryUsersProps {
  data: IUsersDataExtended[] | null;
}

export const GalleryUsers = ({ data }: IGalleryUsersProps) => {
  if (!data) return;

  return (
    Boolean(data.length) && (
      <ul className={styles.gallery}>
        {data.map((item) => (
          <li className={styles.galleryItem} key={item.id}>
            <UserCard {...item} />
          </li>
        ))}
      </ul>
    )
  );
};

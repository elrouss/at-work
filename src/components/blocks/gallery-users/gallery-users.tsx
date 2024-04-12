import styles from './gallery-users.module.scss';
import { UserCard, IUserCardProps } from '../user-card/user-card';

interface IGalleryUsersProps {
  data: IUserCardProps[] | null;
}

export const GalleryUsers = ({ data }: IGalleryUsersProps) => {
  if (!data) return;

  return (
    Boolean(data.length) && (
      <ul className={styles.gallery}>
        {data.map((item) => (
          <li key={item.id}>
            <UserCard {...item} />
          </li>
        ))}
      </ul>
    )
  );
};

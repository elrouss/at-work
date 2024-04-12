import styles from './avatar.module.scss';

interface IAvatarProps {
  img: string;
  username: string;
}

export const Avatar = ({ img, username }: IAvatarProps) => {
  return (
    <div className={styles.avatar} role="button" tabIndex={0}>
      <img className={styles.img} src={img} alt="Аватар пользователя" />
      <h2 className={styles.username}>{username}</h2>
    </div>
  );
};

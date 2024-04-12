import styles from './header.module.scss';
import { Avatar } from '../avatar/avatar';
import { Logo } from '../logo/logo';
import { user } from '@/assets/mock/user';
import { ButtonIcon } from '@/components/ui/button-icon/button-icon';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo />
        <div className={styles.userInfo}>
          <div className={styles.icons}>
            <ButtonIcon
              extraClass={styles.iconFavorite}
              iconName="like"
              ariaLabel="Посмотреть избранное"
            />
            <ButtonIcon
              extraClass={styles.iconAnnounce}
              iconName="announce"
              ariaLabel="Посмотреть оповещения"
            />
          </div>
          <Avatar img={user.avatar} username={user.username} />
        </div>
      </div>
    </header>
  );
};

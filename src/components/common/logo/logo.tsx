import { Link } from 'react-router-dom';
import styles from './logo.module.scss';
import { Svg } from '../svg/svg';

export const Logo = () => {
  return (
    <Link
      className={styles.logo}
      to="/at-work"
      aria-label="Перейти на главную страницу"
    >
      <Svg name="logo" />
      <h1 className={styles.title} lang="en">
        at-<strong className={styles.strong}>work</strong>
      </h1>
    </Link>
  );
};

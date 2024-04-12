import { ReactElement } from 'react';
import styles from './title-with-border.module.scss';

interface ITitleWithBorderProps {
  title: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const TitleWithBorder = ({ title, tag }: ITitleWithBorderProps) => {
  let titleTag: ITitleWithBorderProps['tag'] | ReactElement | null = null;

  switch (tag) {
    case 'h6':
      titleTag = <h6>{title}</h6>;
      break;
    case 'h5':
      titleTag = <h5>{title}</h5>;
      break;
    case 'h4':
      titleTag = <h4>{title}</h4>;
      break;
    case 'h3':
      titleTag = <h3 className={styles.h3}>{title}</h3>;
      break;
    case 'h2':
      titleTag = <h2 className={styles.h2}>{title}</h2>;
      break;
    default:
      titleTag = <h1>{title}</h1>;
  }

  return titleTag;
};

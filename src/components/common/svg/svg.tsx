import clsx from 'clsx';
import styles from './svg.module.scss';

interface ISvgProps {
  name: string;
  hasTransition?: boolean;
}

export const Svg = ({ name, hasTransition = true }: ISvgProps) => {
  return (
    <svg className={clsx({ [styles.svg]: hasTransition })}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

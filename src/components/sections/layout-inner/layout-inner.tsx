import clsx from 'clsx';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './layout-inner.module.scss';
import { TitleWithBorder } from '@/components/blocks/title-with-border/title-with-border';
import { ButtonIcon } from '@/components/ui/button-icon/button-icon';

interface ILayoutInnerProps {
  children: ReactNode;
  title?: string;
  hasButtonBack?: boolean;
  topIndent?: 'l' | 's';
  bottomIndent?: 'l' | 's';
}

export const LayoutInner = ({
  children,
  title,
  hasButtonBack = false,
  topIndent,
  bottomIndent,
}: ILayoutInnerProps) => {
  const navigate = useNavigate();

  return (
    <section
      className={clsx(styles.section, {
        [styles.topSmallIndent]: topIndent === 's',
        [styles.bottomSmallIndent]: bottomIndent === 's',
      })}
    >
      {hasButtonBack && (
        <ButtonIcon
          extraClass={styles.backBtn}
          iconName="arrow-left"
          label="Назад"
          onClick={() => navigate('/')}
        />
      )}
      {title && <TitleWithBorder title={title} tag="h2" />}
      {children}
    </section>
  );
};

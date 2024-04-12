import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './modal-overlay.module.scss';

export interface IModalOverlayProps {
  id: string;
  children: ReactNode;
  isShown: boolean;
}

export const ModalOverlay = ({ id, children, isShown }: IModalOverlayProps) => (
  <div
    className={clsx(styles.overlay, {
      [styles.isShown]: isShown,
    })}
    id={id}
  >
    {children}
  </div>
);

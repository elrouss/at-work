import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal-wrapper.module.scss';
import { ButtonIcon } from '../button-icon/button-icon';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import useHandleModalClose from '@/hooks/useHandleModalClose';

interface IModalWrapperProps {
  id: string;
  children: ReactNode;
  isShown?: boolean;
  handleClose: () => void;
}

export const ModalWrapper = ({
  id,
  children,
  isShown = false,
  handleClose,
}: IModalWrapperProps) => {
  useHandleModalClose(id, isShown, handleClose);

  return createPortal(
    <ModalOverlay id={id} isShown={isShown}>
      <div className={styles.modalWrapper}>
        <ButtonIcon
          extraClass={styles.button}
          iconName="cross"
          ariaLabel="Закрыть модальное окно"
          onClick={handleClose}
        />
        {children}
      </div>
    </ModalOverlay>,
    document.getElementById('react-modals') as HTMLElement
  );
};

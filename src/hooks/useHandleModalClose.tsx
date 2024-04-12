import { useEffect } from 'react';

export default function useHandleModalClose(
  id: string,
  isOpened: boolean,
  handleClose: () => void
) {
  useEffect(() => {
    if (!isOpened) return;

    const closeModal = (evt: Event) => {
      if (
        (evt.target as Element)?.id === id ||
        (evt as KeyboardEvent).key === 'Escape'
      ) {
        handleClose();
      }
    };

    document.addEventListener('click', closeModal);
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeModal);
    };
  }, [isOpened]);
}

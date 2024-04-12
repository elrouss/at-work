import styles from './modal-status.module.scss';
import SuccessImg from '../../../assets/images/statuses/success.png';

interface IModalStatus {
  title: string;
  isSuccess?: boolean;
}

export const ModalStatus = ({ title, isSuccess = true }: IModalStatus) => {
  return (
    <div className={styles.modalStatus}>
      {isSuccess && (
        <img src={SuccessImg} alt="Белая галочка на зеленом фоне" />
      )}
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

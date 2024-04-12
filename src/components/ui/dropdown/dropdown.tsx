import clsx from 'clsx';
import styles from './dropdown.module.scss';

interface IDropdownProps {
  list: { label: string; onClick: () => void }[];
  isShown?: boolean;
  extraClass?: string;
}

export const Dropdown = ({
  extraClass,
  list,
  isShown = false,
}: IDropdownProps) => {
  return (
    <ul
      className={clsx(
        styles.dropdown,
        { [styles.dropdown_visible]: isShown },
        extraClass
      )}
    >
      {list.map((item, i) => (
        <li key={i}>
          <button type="button" onClick={item.onClick}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

import { ICategoryProps } from '@/components/ui/category/category';
import { IInputProps } from '@/components/ui/input/input';

export const handleFormInitialState = (
  data: Omit<IInputProps | ICategoryProps, 'onButtonClick'>[]
) => {
  return data.reduce<Record<string, string>>((acc, curr) => {
    // eslint-disable-next-line no-param-reassign
    acc[curr.name] = curr.value;

    return acc;
  }, {});
};

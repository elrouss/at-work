import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserCardProps } from '@/components/blocks/user-card/user-card';

type TSliceState = {
  user: IUserCardProps | null;
};

const initialState: TSliceState = { user: null };

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setInitialUserData: (state, action: PayloadAction<IUserCardProps>) => {
      state.user = action.payload;
    },

    reset: () => initialState,
  },
});

export const { setInitialUserData, reset } = userProfileSlice.actions;

export default userProfileSlice.reducer;

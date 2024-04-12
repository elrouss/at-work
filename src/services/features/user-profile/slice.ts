import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserProfile } from './types';
import { IUsersDataExtended } from '../users/types';

type TSliceState = {
  user: IUserProfile | null;
};

const initialState: TSliceState = { user: null };

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setInitialUserData: (state, action: PayloadAction<IUsersDataExtended>) => {
      state.user = {
        ...action.payload,
        city: action.payload.address.city,
        company: action.payload.company.name,
      };
    },

    reset: () => initialState,
  },
});

export const { setInitialUserData, reset } = userProfileSlice.actions;

export default userProfileSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserCardProps } from '@/components/blocks/user-card/user-card';

type TSliceState = {
  activeUsers: IUserCardProps[];
  archiveUsers: IUserCardProps[];
};

const initialState: TSliceState = { activeUsers: [], archiveUsers: [] };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setInitialUsers: (state, action: PayloadAction<IUserCardProps[]>) => {
      state.activeUsers = action.payload;
    },

    archiveUser: (state, action: PayloadAction<IUserCardProps>) => {
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== action.payload.id
      );
      state.archiveUsers.push({ ...action.payload, isArchived: true });
    },

    unarchiveUser: (state, action: PayloadAction<IUserCardProps>) => {
      state.activeUsers.push({
        ...action.payload,
        isArchived: false,
      });
      state.archiveUsers = state.archiveUsers.filter(
        (user) => user.id !== action.payload.id
      );
    },

    hideUser: (state, action: PayloadAction<IUserCardProps>) => {
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== action.payload.id
      );
    },

    updateUserData: (state, action: PayloadAction<IUserCardProps>) => {
      state.activeUsers.find((user, i) => {
        if (user.id === action.payload.id) {
          state.activeUsers = [
            ...state.activeUsers.slice(0, i),
            action.payload,
            ...state.activeUsers.slice(i + 1),
          ];
        }
      });
    },

    reset: () => initialState,
  },
});

export const {
  setInitialUsers,
  archiveUser,
  unarchiveUser,
  hideUser,
  updateUserData,
  reset,
} = usersSlice.actions;

export default usersSlice.reducer;

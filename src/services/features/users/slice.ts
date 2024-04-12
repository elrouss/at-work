import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { IUsersData, IUsersDataExtended } from './types';
import avatar from '../../../assets/images/mock/avatar.jpg';
import { IUserProfile } from '../user-profile/types';

type TSliceState = {
  activeUsers: IUsersDataExtended[];
  archiveUsers: IUsersDataExtended[];
  status: 'idle' | 'loading' | 'success' | 'fail';
  error?: string | null;
};

const initialState: TSliceState = {
  activeUsers: [],
  archiveUsers: [],
  status: 'idle',
  error: null,
};

export const fetchUsersData = createAsyncThunk(
  'users/fetchUsersData',
  async () => {
    const response: AxiosResponse<IUsersData[], unknown> = await axios.get(
      `${import.meta.env.VITE_API_URL_OPENAPI as string}/users`
    );

    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    archiveUser: (state, action: PayloadAction<IUsersDataExtended>) => {
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== action.payload.id
      );
      state.archiveUsers.push({ ...action.payload, isArchived: true });
    },

    unarchiveUser: (state, action: PayloadAction<IUsersDataExtended>) => {
      state.activeUsers.push({
        ...action.payload,
        isArchived: false,
      });
      state.archiveUsers = state.archiveUsers.filter(
        (user) => user.id !== action.payload.id
      );
    },

    hideUser: (state, action: PayloadAction<IUsersDataExtended>) => {
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== action.payload.id
      );
    },

    updateUserData: (state, action: PayloadAction<IUserProfile>) => {
      state.activeUsers.find((user, i) => {
        if (user.id === action.payload.id) {
          state.activeUsers = [
            ...state.activeUsers.slice(0, i),
            {
              ...action.payload,
              address: {
                ...state.activeUsers[i].address,
                city: action.payload.city,
              },
              company: {
                ...state.activeUsers[i].company,
                name: action.payload.company,
              },
            },
            ...state.activeUsers.slice(i + 1),
          ] as IUsersDataExtended[];
        }
      });
    },

    reset: () => initialState,
  },

  extraReducers(builder) {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchUsersData.fulfilled,
        (state, action: PayloadAction<IUsersData[]>) => {
          state.status = 'success';

          // hardcode and mock
          state.activeUsers = action.payload
            .map((user) => ({ ...user, img: avatar }))
            .slice(0, 6);
        }
      )
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error.message;
      });
  },
});

export const { archiveUser, unarchiveUser, hideUser, updateUserData, reset } =
  usersSlice.actions;

export default usersSlice.reducer;

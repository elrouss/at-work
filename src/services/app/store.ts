import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userProfileSlice from '../features/user-profile/slice';
import usersSlice from '../features/users/slice';
import type { Action, ThunkAction } from '@reduxjs/toolkit';

const rootReducer = combineSlices({
  users: usersSlice,
  userProfile: userProfileSlice,
});

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  });

  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

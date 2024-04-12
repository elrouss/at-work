import { RootState } from '@/services/app/store';

export const getUserProfileData = (state: RootState) => state.userProfile.user;

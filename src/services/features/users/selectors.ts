import { RootState } from '@/services/app/store';

export const getActiveUsers = (state: RootState) => state.users.activeUsers;
export const getArchiveUsers = (state: RootState) => state.users.archiveUsers;
export const status = (state: RootState) => state.users.status;
export const error = (state: RootState) => state.users.error;

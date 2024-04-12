import { RootState } from '@/services/app/store';

export const getActiveUsers = (state: RootState) => state.users.activeUsers;
export const getArchiveUsers = (state: RootState) => state.users.archiveUsers;

export interface IUserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  city: string;
  phone: string;
  website: string;
  company: string;
  img: string;
  workspace?: string;
  privacy?: string;
  security?: string;
  isArchived?: boolean;
}

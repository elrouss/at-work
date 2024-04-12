import axios, { AxiosResponse } from 'axios';

export interface IUsersData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const fetchUsersData = async (limit?: number) => {
  try {
    const response: AxiosResponse<IUsersData[], unknown> = await axios.get(
      `${import.meta.env.VITE_API_URL_OPENAPI as string}/users`
    );

    if (response.status !== 200 || !response.data) {
      throw new Error();
    }

    return response.data.slice(0, limit); // TODO: hardcode
  } catch (e) {
    throw e;
  }
};

import getUrl from '@utils/getUrl';
import axios from 'axios';
const env = process.env.VITE_ENV || import.meta.env.VITE_DEV;
export const instance = axios.create({
  baseURL: getUrl(env),
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err);
  },
);

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://test.hellolaw.kr:8000',
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err);
  },
);

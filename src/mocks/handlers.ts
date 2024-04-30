import { http, HttpResponse } from 'msw';

import { setCookie } from '@utils/cookies';

export const handlers = [
  http.get('/apples', () => {
    setCookie('refreshToken', 'testToken', {
      path: '/',
      sameSite: 'strict',
    });
    setCookie('nickname', 'TestGuest', {
      path: '/',
      sameSite: 'strict',
    });
    return new HttpResponse(null, {
      status: 200,
      statusText: 'Save Cookie',
    });
  }),
];

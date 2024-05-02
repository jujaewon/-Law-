import { http, HttpResponse } from 'msw';
const baseUrl = 'https://test.hellolaw.kr:8000';

export const handlers = [
  http.get(baseUrl + '/api/login/kakao', () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: 'Save Cookie',
    });
  }),
  http.post(baseUrl + '/api/logout/kakao', () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: 'Logut Success',
    });
  }),
  http.get('/api/posts', () => {
    console.log('ttt');
    return new HttpResponse(null, {
      status: 200,
      statusText: 'LogutSuccess',
    });
  }),
];

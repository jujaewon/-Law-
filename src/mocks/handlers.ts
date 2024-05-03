import { http, HttpResponse } from 'msw';
const baseUrl = 'https://test.hellolaw.kr:8000';

export const handlers = [
  http.get('/api/login/kakao', () => {
    return new HttpResponse(null, {
      status: 200,
      statusText: 'Save Cookie',
    });
  }),
  http.get(baseUrl + '/auth/logout', () => {
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
  http.post('/api/question', (req) => {
    console.log(req);
  }),
];

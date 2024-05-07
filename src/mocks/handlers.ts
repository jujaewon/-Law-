import { http, HttpResponse } from 'msw';
const baseUrl = 'https://test.hellolaw.kr:8000';

export const handlers = [
  http.get(baseUrl + '/api/login/kakao', () => {
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
  http.post(baseUrl + '/api/question', () => {
    const data = {
      suggestion: '이렇게 하세요',
      precedent: {
        precedentId: 3,
        lawType: '형사',
        precedentSummary: '요약판례임',
        category: '음주운전',
      },
      relatedLaws: ['관세법 제107조', '관세법 제108조', '관세법 제109조'],
    };

    return HttpResponse.json(data, {
      status: 200,
      statusText: 'QuestionSuccess',
    });
  }),
];

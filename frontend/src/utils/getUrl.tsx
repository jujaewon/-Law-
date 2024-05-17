const getUrl = (type: string) => {
  if (type === 'dev') return 'http://localhost:8082';
  if (type === 'auth') return 'http://localhost:8099';
  if (type === 'test') return 'http://msw:8080';
  if (type === 'real-test') return 'https://test.hellolaw.kr';
  if (type === 'real') return 'https://hellolaw.kr';
  return 'http://msw:8080';
};
export default getUrl;

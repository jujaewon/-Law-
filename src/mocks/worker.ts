async function initMSW() {
  if (typeof window === 'undefined') {
    // const { server } = await import('./server');
    // server.listen({
    //   onUnhandledRequest: 'bypass',
    // }); // Node.js 환경에서 Server 활성화
  } else {
    const { worker } = await import('./browser');
    worker.start({
      onUnhandledRequest: 'bypass',
    }); // 브라우저 환경에서 Worker 활성화
  }
}
export { initMSW };

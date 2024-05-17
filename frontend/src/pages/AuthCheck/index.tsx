import getUrl from '@utils/getUrl';
import { useEffect } from 'react';

const AuthCheck = () => {
  const handleKaKaoLogin = () => {
    console.log('구글 로그인 진행중');
    const env = import.meta.env.VITE_DEV;
    console.log('환경', env);
    window.location.href = getUrl(env) + '/oauth2/authorization/google';
  };
  useEffect(() => {
    handleKaKaoLogin();
  }, []);

  return <></>;
};

export default AuthCheck;

import getUrl from '@utils/getUrl';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import axios from 'axios';

// import { setCookie } from '@utils/cookies';

const AuthCheck = () => {
  //   const navigate = useNavigate();
  const handleKaKaoLogin = () => {
    console.log('카카오 로그인 진행중');
    const env = import.meta.env.VITE_DEV;
    console.log('환경', env);
    if (env === 'dev') window.location.href = getUrl('auth') + '/auth/oauth2/authorize/kakao';
    if (env === 'test') window.location.href = getUrl(env) + '/auth/oauth2/authorize/kakao';
    if (env === 'real') window.location.href = getUrl(env) + '/auth/oauth2/authorize/kakao';
  };
  useEffect(() => {
    handleKaKaoLogin();
  }, []);

  return <></>;
};

export default AuthCheck;

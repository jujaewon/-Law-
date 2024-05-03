import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { setCookie } from '@utils/cookies';

const AuthCheck = () => {
  const navigate = useNavigate();
  const handleKaKaoLogin = () => {
    console.log('카카오 로그인 진행중');
    const env = import.meta.env.VITE_DEV;
    console.log(env);
    if (!env) window.location.href = 'http://test.hellolaw.kr/auth/oauth2/authorize/kakao';
    else {
      console.log('개발모드');
      axios.get('/api/login/kakao').then((res) => {
        if (res.status === 200) {
          setCookie('nickname', 'testGuest', {
            path: '/',
            sameSite: 'strict',
          });
          navigate('/');
        }
      });
    }
  };

  useEffect(() => {
    handleKaKaoLogin();
  }, []);

  return <></>;
};

export default AuthCheck;

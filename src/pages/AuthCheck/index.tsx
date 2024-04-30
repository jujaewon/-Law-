import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { getCookie } from '@utils/cookies';

const AuthCheck = () => {
  // const kakaoURL = import.meta.env.VITE_KAKAO_LOGIN_URL;
  // window.location.href = kakaoURL;
  const navigate = useNavigate();
  const handleKaKaoLogin = () => {
    axios.get('/apples').then((res) => {
      if (res.status === 200) {
        console.log('쿠키저장', getCookie('nickname'));
        navigate('/');
      }
    });
  };

  useEffect(() => {
    handleKaKaoLogin();
  }, []);

  return <></>;
};

export default AuthCheck;

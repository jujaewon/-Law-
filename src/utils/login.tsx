// oauth 요청 URL
const kakaoURL = import.meta.env.VITE_KAKAO_LOGIN_URL;

export const handleKaKaoLogin = () => {
  window.location.href = kakaoURL;
  return <></>;
};

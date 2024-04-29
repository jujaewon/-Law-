import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '@pages/Main';
import { handleKaKaoLogin } from '@utils/login';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login/kakao" element={<AuthCheck />} />
    </Routes>
  </BrowserRouter>
);

function AuthCheck() {
  return handleKaKaoLogin();
}
export default Router;

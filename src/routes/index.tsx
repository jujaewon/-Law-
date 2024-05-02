import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthCheck from '@pages/AuthCheck';
import Main from '@pages/Main';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login/kakao" element={<AuthCheck />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

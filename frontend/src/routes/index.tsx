import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthCheck from '@pages/AuthCheck';
import Main from '@pages/Main';
import Home from '@pages/Home';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login/kakao" element={<AuthCheck />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

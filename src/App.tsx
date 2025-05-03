import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/Start/StartPage.tsx';
import ProfileCheckPage from './pages/ProfileCheck/ProfileCheckPage.tsx';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/profile" element={<ProfileCheckPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

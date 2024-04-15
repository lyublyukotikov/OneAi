import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../src/Pages/MainPage.jsx';
import Upload from '../src/Pages/Upload.jsx';
import LogIn from '../src/Pages/LogIn.jsx';
import Rezult from '../src/Pages/Pezult.jsx';

function OneAi() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/rezult" element={<Rezult />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OneAi/>
  </React.StrictMode>
);

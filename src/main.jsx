import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './not.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

import BookDetail from './BookDetail.jsx';
import MyPage from './MyPage.jsx';
import Message from './Message.jsx';

import Myreport from './Myreport.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BookDetail/:id" element={<BookDetail />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Message" element={<Message />} />
        <Route path='/Myreport' element={<Myreport />} />

      </Routes>
    </BrowserRouter>

  </StrictMode>,
)

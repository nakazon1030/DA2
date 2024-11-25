import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './not.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'

import BookDetail from './BookDetail.jsx';
import MyPage from './MyPage.jsx';
import Message from './Message.jsx';
import RankingData from './RankingData.jsx';
import ShowRankingPage from './ShowRankingPage.jsx';
import ShowRankingTime from './ShowRankingTime.jsx';
import TestPage from './TestPage.jsx';

import Myreport from './Myreport.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BookDetail" element={<BookDetail />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/RankingData" element={<RankingData />} />
        <Route path="/ShowRankingPage" element={<ShowRankingPage />} />
        <Route path="/ShowRankingTime" element={<ShowRankingTime />} />
        <Route path="/TestPage" element={<TestPage />} />
        <Route path='/Myreport' element={<Myreport />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)

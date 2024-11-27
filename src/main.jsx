import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './not.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Myreport from './Myreport.jsx'
import TestPage from './TestPage.jsx'
import Edit from './Edit.jsx'
import BookDetail from './BookDetail.jsx'
import NewBook from './NewBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BookDetail/:id" element={<BookDetail />} />
        <Route path='/Myreport' element={<Myreport />} />
        <Route path='/TestPage' element={<TestPage />} />
        <Route path='/Edit' element={<Edit />} />
        <Route path='/NewBook' element={<NewBook />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)

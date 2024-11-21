import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Routes, Route } from 'react-router-dom';
import BookDetails from './BookDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BookDetails" element={<BookDetails />} />
      </Routes> */}
  </StrictMode>
)

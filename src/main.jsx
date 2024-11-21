import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import RoutePage from './RoutePage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routes>
        <Route path="/" element={<App />} />
    </Routes>
    
  </StrictMode>,
)

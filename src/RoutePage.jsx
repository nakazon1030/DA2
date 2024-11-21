import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App from './App.jsx';

function RoutePage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/detail" element={<Detail />} /> */}
      </Routes>
    </>
  )
}

export default RoutePage

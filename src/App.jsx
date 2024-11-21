import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    // ボタンがクリックされたときに遷移
    navigate('/x');
  };

  return (
    <>
      <div className="top-area">
        <h1>aaaaa</h1>
        <div className="book-area">
          <p className="title">title</p>
          <p>\1000</p>
          <button className="button" onClick={handleClick}>詳細</button>
        </div>
      </div>
    </>
  )
}

export default App

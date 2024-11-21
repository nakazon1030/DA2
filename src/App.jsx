import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';

const App = () => {

  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate('/BookDetails'); // サブページへ遷移
  // };

  return (
    <>
      <div className="top-area">
        <h1>aaaaa</h1>
        <div className="book-area">
          <p className="title">title</p>
          <p>\1000</p>
          {/* <button className="button" onClick={handleNavigate}>詳細</button> */}
        </div>
      </div>
    </>
  )
}

export default App

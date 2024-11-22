import { useState } from 'react'
import book from './img/book.png'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import './App.css'

import { ShowAllBooks } from './ShowAllBooks';

function App() {
  const navigate = useNavigate();

  const handleClick = (props) => {
    // ボタンがクリックされたときに遷移
    if (props == "BookDetail"){
      navigate('/BookDetail');
    }
    else if (props == "top"){
      navigate('/');
    }
    else{
      navigate('/');
    }
    
  };

  return (
    <>
      <div>
        <div className="book-area" onClick={() => handleClick('BookDetail')}>
        <img className='image' src={book}/>
         <div>
          <p className="title">title</p>
          <p className='list-row'>この本にはこんなことがかいてあります</p>
        </div>
         <div className='cost'>
          <p>報奨金<br></br>\1000</p>
          </div>
        </div>
      </div>
      <ShowAllBooks />
        <div className='sp-fixed-menu'>
          <ul>
            <li><a href='#'onClick={() => handleClick('Top')}>トップ</a></li>
            <li><a href='#'onClick={() => handleClick()}>マイページ</a></li>
          </ul> 
        </div>
      
    </>
  )
}

export default App

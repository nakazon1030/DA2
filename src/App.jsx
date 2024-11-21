import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom';
import './App.css'


function App() {
  const navigate = useNavigate();

  const handleClick = (props) => {
    // ボタンがクリックされたときに遷移
    if (props == "BookDetail"){
      navigate('/BookDetail');
    }
    else{
      navigate('/');
    }
    
  };

  return (
    <>
      <div>
        <div className="book-area">
        <img className='image' src={book}/>
         <div>
          <p className="title">title</p>
          //<button className="button" onClick={() => handleClick('BookDetail')}>詳細</button>

          <p className='list-row'>この本にはこんなことがかいてあります</p>
        </div>
         <div className='cost'>
          <p>報奨金<br></br>\1000</p>
          </div>
        </div>
      </div>    
        <div className='sp-fixed-menu'>
          <ul>
            <li><a href='#'>トップ</a></li>
            <li><a href='#'>マイページ</a></li>
          </ul> 
                 

        </div>
      
    </>
  )
}

export default App

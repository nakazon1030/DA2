import React, { useState, useEffect } from 'react';
import book from './img/book.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function BookDetail() {

 const [Flag, setFlag] = useState(0); // 現在の対象となるフラグ

  return (
    <div>
      <div className='book-d-area'>
        <div className='book-d1-area'>
         <img className='image-d' src={book}/>
        </div>
        <div className='book-d2-area line-left'>
         
          <p className='title-d'>タイトル</p>

          <meter className='meter' min="0" max="100" value="50"></meter>
          <p>返金額:\1000</p>
          {Flag === 0 &&
          <div className='date-d'>
            <br></br>
            <br></br>
          </div>
          }
          {Flag === 1 &&
          <div className='date-d'>
           <p>有効期限</p>
           <p>2025 / 10 / 30</p>
          </div>
          }
          {Flag === 0 && <button className='regi-button'onClick={() => setFlag(1)}>登録</button>}
          {Flag === 1 && <button className='regi-button'onClick={() => setFlag(0)}>読む</button>}
         </div>
      </div>
      {Flag === 0 &&
       <div className='book-button-area'>
       </div>
      }
      {Flag === 1 &&
       <div className='book-button-area'>
        <button className='button-d'>コメント</button>
        <button className='button-d'>売る</button>
       </div>
      }
       <div>
        <p className='book-title'>目次</p>
        <p>ああああああああ</p>
       </div>
       <div>
        <p className='book-coment'>コメント</p>
        <p>面白いですm</p>
       </div>
   </div>

  )
}

export default BookDetail


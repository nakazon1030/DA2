import { useState } from 'react'
import book from './img/book.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function BookDetail() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='book-d-area'>
        <div className='book-d1-area'>
         <img className='image-d' src={book}/>
        </div>
        <div className='book-d2-area line-left'>
         
          <p className='title-d'>タイトル</p>
          <meter className='meter' min="0" max="100" value="50"></meter>
          <p className='return-money'>返金額:\1000</p>
          <div className='date-d'>
           <p>有効期限</p>
           <p>月</p>
          </div>
          <button className='regi-button'>登録</button>
         </div>
      </div>
       <div className='book-button-area'>
        <button className='button-d'>コメント</button>
        <button className='button-d'>売る</button>
       </div>
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


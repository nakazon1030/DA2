import { useState } from 'react'
import book from './img/book.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function BookDetail() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='book-d-area'>
        <div className='book-d1-area'>
         <img className='image-d' src={book}/>
        </div>
        <div className='book-d2-area line-left'>
         
          <p className='title-d'>タイトル</p>
          <meter className='meter' min="0" max="100" value="50"></meter>
           <p>有効期限</p>
           <p>月</p>
         </div>
       
      </div>
        
          
     
      
    
  )
}

export default BookDetail


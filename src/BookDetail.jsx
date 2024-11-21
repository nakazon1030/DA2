import { useState } from 'react'
import book from './img/book.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function BookDetail() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="book-area">
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
        <div className='sp-fixed-menu'>
          <ul>
            <li><a href='#'>トップ</a></li>
            <li><a href='#'>マイページ</a></li>
          </ul> 
                 

        </div>
      
    </>
  )
}

export default BookDetail
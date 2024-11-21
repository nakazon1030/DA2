import { useState } from 'react'
import book from './img/book.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-area">
        <div className="book-area">
        <img className='image' src={book}/>
         <div>
          <p className="title">title</p>
          <p className='list-row'>この本にはこんなことがかいてあります</p>
        </div>
          <p className='cost'>報奨金<br></br>\1000</p>
        </div>
      </div>
    </>
  )
}

export default App

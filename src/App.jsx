import { useState } from 'react'
import book from '../img/book.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-area">
        <div className="book-area">
        <img src={book}/>
          <p className="title">title</p>
          <p>\1000</p>
          <button className="button">詳細</button>
        </div>
      </div>
    </>
  )
}

export default App

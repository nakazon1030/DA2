import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-area">
        <h1>aaaaa</h1>
        <div className="book-area">
          <p className="title">title</p>
          <p>\1000</p>
          <button className="button">詳細</button>
        </div>
      </div>
    </>
  )
}

export default App

import book from './img/book.png'
import { useNavigate } from 'react-router-dom';
import './App.css'

import { ShowAllBooks } from './ShowAllBooks';
import { handleClick } from './handclick.jsx';
function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className='sp-fixed-menu'>
        <ul>
          <li onClick={() => handleClick(navigate, 'Top')}>社内図書館システム</li>
          <li onClick={() => handleClick(navigate, 'MyPage')}>マイページ</li>
        </ul> 
      </div>
      <div className='main-page'>
        <div className="book-area" onClick={() => handleClick(navigate, 'BookDetail')}>
        <div className="image"> 
          <img src={book}/> 
        </div>
         <div className='book-text'>
          <p className="title">title</p>
          <p className='list-row'>この本にはこんなことがかいてあります</p>
        </div>
         <div className='cost'>
          <p>報奨金<br></br>\1000</p>
          </div>
        </div>
        <ShowAllBooks />
      </div>          

    </>
  )
}

export default App

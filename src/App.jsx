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

        <ShowAllBooks />
      </div>          

    </>
  )
}

export default App

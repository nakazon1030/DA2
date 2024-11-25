import book from './img/book.png'
import obi from './img/obi4.jpg'
import book2 from './img/koukoku.jpg'
import { useNavigate } from 'react-router-dom';
import './App.css'

//import {SrideShow} from './SrideShow.jsx';
import { ShowAllBooks } from './ShowAllBooks';
import { handleClick } from './handclick.jsx';
import SrideShow from './SrideShow.jsx';
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
            <img src={book2}/> 
          </div>

          <div className='book-text'>
            <div className='obi'>
              <SrideShow />
            </div>
          </div> 

        </div>
        <ShowAllBooks />
      </div>          

    </>
  )
}

export default App

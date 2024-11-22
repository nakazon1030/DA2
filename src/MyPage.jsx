import book from './img/book.png'
import { useNavigate } from 'react-router-dom';
import './App.css'

function MyPage() {
  const navigate = useNavigate();

  const handleClick = (props) => {
    // ボタンがクリックされたときに遷移
    if (props == "BookDetail"){
      navigate('/BookDetail');
    }
    else if (props == "top"){
      navigate('/');
    }
    else if (props == "MyPage"){
      navigate('/MyPage');
    }
    else{
      navigate('/');
    }
    
  };

  return (
    <>
      <div className='sp-fixed-menu'>
        <ul>
          <li onClick={() => handleClick('Top')}>社内図書館システム(マイページ)</li>
          <li onClick={() => handleClick('Top')}>トップに戻る</li>
        </ul> 
      </div>
      <div className='main-page'>
        <div className="book-area" onClick={() => handleClick('BookDetail')}>
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
      </div>         
    </>
  )
}

export default MyPage

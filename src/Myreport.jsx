import book from './img/book.png'
import { useNavigate } from 'react-router-dom';
import './Myreport.css'
import './index.css'


import { ShowAllBooks } from './ShowAllBooks';
import { handleClick } from './handclick.jsx';
import { Showpastbook } from './Showpastbook.jsx';
import clock from './img/clock.png'
import book5 from './img/book5.png'
import star from './img/star.png'
function Myreport() {
  const navigate = useNavigate();

  return (
    <>
    <div className='area'>
        <div className='pyramid-page'> 
        </div>
        <div className='score-area'>
          <div className='score-page'>
          <img  className='clock'src={book5} ></img>
            <p className='page-rank'>3位</p>
          </div>
          <div className='score-time'>
          <img  className='clock'src={clock} ></img>
          <p className='time-rank'>1位</p>
          </div>
        </div>
        <div className='pyramid-time'>
            
        </div>
    </div>
    <div className='regi'>
      <div className='regi-top'>
        <div className='regi-page'>
        <img  className='clock'src={book5} ></img>
          <p className='page-num'>100 page</p>
        </div>
        <div className='regi-time'>
        <img  className='clock'src={clock} ></img>
          <p className='time-num'>4 hour</p>

        </div>

      </div>
    </div>
    <div className='past'>
      <div className='past-area'>
        <div className='past-top'>
          <div className='past-title'>
          <p className='past-b-title'>嫌われる勇気</p>
          </div>
          <div className='past-good'>
           <p className='past-b-title'>いいね</p>
           <img  className='star'src={star} ></img>
           <p className='past-b-title'>4</p>
          </div>
       </div>
       <Showpastbook />
      </div>
    </div>
    </>

  )

}
export default Myreport
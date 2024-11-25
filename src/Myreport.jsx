import book from './img/book.png'
import { useNavigate } from 'react-router-dom';
import './Myreport.css'

import { ShowAllBooks } from './ShowAllBooks';
import { handleClick } from './handclick.jsx';
import clock from './img/clock.png'
import book5 from './img/book5.png'
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
    </>

  )

}
export default Myreport
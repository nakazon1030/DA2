import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import zatudan from './img/zatudan.jpg';
import './NewBook.css'
import { useParams } from 'react-router-dom';
import BookData from './BookData.jsx';
import { handleClick } from './handclick.jsx';


function NewBook() {
    const [Flag,setFlag] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();
    const intId = parseInt(id,10);
    const filteredArray = BookData.filter(item => item.id ===intId);
    console.log(filteredArray);


    return (
        <>
         <div className='sp-fixed-menu'>
        <ul>
          <li>本の詳細</li>
          <li onClick={() => handleClick(navigate, 'Top')}>トップ</li>
        </ul> 
      </div>
        <div className='new-book-1'>
            <div className='new-book-i'>
                <img src={filteredArray[0].image} />
            </div>
            <div className='new-book-d'>
                <p className='new-title'>{filteredArray[0].title}</p>
                <p className='new-auth'>{filteredArray[0].auth}</p>
                <p className='pub-date'>{filteredArray[0].year}</p>
                <p className='pub-com'>{filteredArray[0].publish}</p>
                {/* <button className='new-regi'>登録</button> */}
                {Flag === 0 && <button className='new-regi'onClick={() => setFlag(1)}>登録</button>}
                {Flag === 1 && <button className='new-regi'onClick={() => setFlag(0)}>登録解除</button>}   
            </div>
        </div>
        {Flag === 0 &&
       <div className='new-book-2'>
       </div>
      }
      {Flag === 1 &&
        <div className='new-book-2'>
            <button className='new-read'>読む</button>
            <button className='new-finish'>読み終わり</button>
       </div>
      }
       
        <div className='new-book-3'>
            <p className='book-youshi'>要旨</p>
            <p>{filteredArray[0].youshi}</p>
        </div>
        </>

        )
}

export default NewBook
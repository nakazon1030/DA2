import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from './img/book.png'
import book_zatudan from './img/zatudan.jpg'
import obi_zatudan1 from './img/obi-zatudan1.jpg'
import obi_zatudan2 from './img/obi-zatudan2.jpg'
import obiplus from './img/obiplus.png'
import SrideShow from './SrideShow.jsx';
import { handleClick } from './handclick.jsx';
import BookData from './BookData.jsx';
import star from './img/star.png';

export const Showpastbook = () =>{
    
    const navigate = useNavigate();
    
    // const booklist = BookData.map(Book => {
    //     if ( Book.flag ===1 ) {
    //         return
    //         ( <>
    //             <div className="book-area" onClick={() => handleClick(navigate, 'BookDetail')}>
    //         <div className="image">
    //             <img src={Book.image}/>
    //         </div>
    //         <div className='book-text'>
    //             <div className="obi">
    //                 <SrideShow obi1={Book.obi1} obi2={Book.obi2} />  
    //             </div>
    //         </div>

    //     </div>
    //     </>)
    //     };
        
    // return (
    //     <>
    //     <ul>{booklist}</ul>
    //     </>
    // );

    const booklist = BookData.map((Book) => { 
        if (Book.flag === 1) { 
            console.log(Book.id);
            return (
                <>
            <div className='past-top'>
                <div className='past-title'>
                <p className='past-b-title'>{Book.title}</p>
                </div>
                <div className='past-good'>
                <p className='past-b-title'>いいね</p>
                <img  className='star'src={star} />
                <p className='past-b-title'>4</p>
                </div>
            </div>
            
                 <div className="book-area" onClick={() => handleClick(navigate, 'BookDetail',Book.id)}> 
                  <div className="image"> 
                   <img src={Book.image} alt={Book.title} />
                    </div> 
                    <div className="book-text">
                        <div className='bg'>
                            <div>
                                {/* <img src={obiplus} /> */}
                            </div>
                            <div className="obi">                         
                                <SrideShow images={Book.images} /> 
                            </div>    
                        </div> 
                 </div>
                 </div> 
                 </>
                 );
                 } 
                 return null; 
                }); 
                return (
                     <ul>{booklist}</ul> 
                     );
};

export default Showpastbook
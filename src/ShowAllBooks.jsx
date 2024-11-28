import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from './img/book.png'
import book_zatudan from './img/zatudan.jpg'
import obi_zatudan1 from './img/obi-zatudan1.jpg'
import obi_zatudan2 from './img/obi-zatudan2.jpg'
import SrideShow from './SrideShow.jsx';
import { handleClick } from './handclick.jsx';
import BookData from './BookData.jsx';

export const ShowAllBooks = () =>{
    
    const navigate = useNavigate();
    
    const booklist = BookData.map(Book => (
        <div className="book-area" onClick={() => handleClick(navigate, 'NewBook',Book.id)}>
            <div className='book-text'>
                    <div className="obi">
                        <SrideShow images={Book.images} />  
                    </div>
            </div>
            <div className="image">
                <img src={Book.image}/>

            </div>
            <div dangerouslySetInnerHTML={{ __html: book.htmlContent }} />
            {console.log("Book:" + book.htmlContent)}

        </div>
        
        ));
    return (
        <>
        <ul>{booklist}</ul>
        </>
    );
};

export default ShowAllBooks
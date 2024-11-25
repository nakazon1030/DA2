import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from './img/book.png'
import obi from './img/obi3.jpg'
import SrideShow from './SrideShow.jsx';
import { handleClick } from './handclick.jsx';

export const ShowAllBooks = () =>{
    
    const navigate = useNavigate();
    const AllBooks = [
        {
            title:"title1",
            image:book,
            comment:"部長おすすめ",
            flag:"1"
        },
        {
            title:"title2",
            image:book,
            comment:"最近熱い",
            flag:"0"
        },
        {
            title:"title3",
            image:book,
            comment:"知る人ぞ知る名本",
            flag:"1"
        }];
    const booklist = AllBooks.map(onebook => (
        <div className="book-area" onClick={() => handleClick(navigate, 'BookDetail')}>
            <div className="image">
                <img src={onebook.image}/>
            </div>
            <div className='book-text'>
                <div className="obi">
                    <SrideShow />  
                </div>
            </div>

        </div>
        
        ));
    return (
        <>
        <ul>{booklist}</ul>
        </>
    );
};

export default ShowAllBooks
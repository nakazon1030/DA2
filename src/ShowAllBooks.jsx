import React from 'react';
import { useNavigate } from 'react-router-dom';
import book from './img/book.png'
import { handleClick } from './handclick.jsx';
export const ShowAllBooks = () =>{
    
    const navigate = useNavigate();
    const AllBooks = [
        {
            index:0,
            title:"title1",
            image:book,
            comment:"部長おすすめ",
            flag:"1"
        },
        {
            index:1,
            title:"title2",
            image:book,
            comment:"最近熱い",
            flag:"0"
        },
        {
            index:2,
            title:"title3",
            image:book,
            comment:"知る人ぞ知る名本",
            flag:"1"
        }];
    const booklist = AllBooks.map(onebook => (
        <div className="book-area" onClick={() => handleClick(navigate, 'BookDetail', onebook.index)}>
            <div className="image">
                <img src={onebook.image}/>
            </div>
            <div className='book-text'>
                <p className="title">{onebook.title}</p>
                <p className='list-row'>{onebook.comment}</p>
            </div>
            <div className='cost'>
                <p>報奨金<br></br>\1000</p>
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
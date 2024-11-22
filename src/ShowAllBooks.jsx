import React from 'react';
import book from './img/book.png'

export const ShowAllBooks = () =>{
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
        <div className="book-area" onClick={() => handleClick('BookDetail')}>
            <img className='image' src={onebook.image}/>
            <div>
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
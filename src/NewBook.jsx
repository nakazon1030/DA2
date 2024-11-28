import React from 'react';
import { useNavigate } from 'react-router-dom';
import zatudan from './img/zatudan.jpg';
import './NewBook.css'

function NewBook() {
    const navigate = useNavigate();

    return (
        <>
        <div className='new-book-1'>
            <div className='new-book-i'>
                <img src={zatudan} />
            </div>
            <div className='new-book-d'>
                <p className='new-title'>超一流の雑談力</p>
                <p className='new-auth'>安田 正</p>
                <p className='pub-date'>2015年5月20日</p>
                <p className='pub-com'>文響社</p>
                <button className='new-regi'>登録</button>
            </div>
        </div>
        <div className='new-book-2'>
            <button className='new-read'>読む</button>
            <button className='new-finish'>読み終わり</button>
        </div>
        <div className='new-book-3'>
            <p className='book-youshi'>要旨</p>
            <p>あたりさわりのない無意味な雑談ではなく、「意味のある雑談をすれば、仕事や人間関係が変わる」。そんなメッセージのもと、雑談力を高める方法を具体的、実践的に解説したのが本書です。
たとえば、「声は、ドレミファソラシドの『ファ』か『ソ』」「『なるほどですね』『そうですね』は話を聞いていない人の反応」「『なぜですか?』は愚問」など、</p>
        </div>
        </>

        )
}

export default NewBook
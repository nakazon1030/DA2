import book from './img/book.png'
import waku from './img/waku3r.png'
// import obi1 from './img/obi-koukoku1.jpg'
// import obi2 from './img/obi-zatudan1.jpg'
import book2 from './img/koukoku.jpg'
import { useNavigate } from 'react-router-dom';
import './App.css'
import './index.css'



// useStateとuseEffectをインポート
import React, { useState, useEffect } from "react";


export default function SrideShow({images}) {
  // 表示したい画像のパスを配列imagesに格納
  //const images = [obi1, obi2];

  // 表示する画像のindexをStateで管理(JSX内で使用)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffectとsetIntervalを使用して、指定した秒数おきに、上記Stateで管理したindexを切り替えるようにする。
  useEffect(() => {
    // 4秒おきに画像を切り替える（現在のindex+1を画像の数で割ることでループする）
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    // ページを離れるときにインターバル処理を終了する（これがないとずっと裏でインターバルが動いてしまう。）
    return () => clearInterval(timer);
  },[images.length]);

  return (
    <div className="book-text">
      {images.map((obi,index) => (
        <div
          key={index}
          className={`slide ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
         <div className='obi-waku'>
          <img className='obi-waku-1' src={waku} />
          <img className='obi-waku-2'
            src={obi}
            alt={`Slide ${index}`}
            // objectFit="cover"    
          />
          </div>
        </div>
      ))}
    </div>
  );
}


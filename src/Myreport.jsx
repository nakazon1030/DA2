import { useNavigate } from 'react-router-dom';
import { handleClick } from './handclick.jsx';
import './Myreport.css';
import React, { useState } from 'react';
import clock from './img/clock.png';
import book5 from './img/book5.png';
import ShowRankingPage from './ShowRankingPage.jsx';
import ShowRankingTime from './ShowRankingTime.jsx';
import pyramid1 from "./img/pyramid (1).png";
import pyramid2 from "./img/pyramid (2).png";
import pyramid3 from "./img/pyramid (3).png";
import pyramid4 from "./img/pyramid (4).png";
import pyramid5 from "./img/pyramid (5).png";
import pyramid6 from "./img/pyramid (6).png";
import pyramid7 from "./img/pyramid (7).png";
import pyramid8 from "./img/pyramid (8).png";
import pyramid9 from "./img/pyramid (9).png";
import pyramid10 from "./img/pyramid (10).png";
import pyramid11 from "./img/pyramid (11).png";
import star from './img/star.png'
function Myreport() {
  const navigate = useNavigate();

  const [pagesRead, setPagesRead] = useState('');  //ページ数
  const [timeSpent, setTimeSpent] = useState('');   //時間設定
  const [pageRank, setPageRank] = useState(null);
  const [timeRank, setTimeRank] = useState(null);
  const [showInputs, setShowInputs] = useState(false); // 入力フィールドの表示状態を管理

  const handlePageRankCalculated = (calculatedRank) => {
    setPageRank(calculatedRank);
  };
  const handleTimeRankCalculated = (calculatedRank) => {
    setTimeRank(calculatedRank);
  };

  const getPageRankImage = (pageRank) => {
    if (pageRank === null) {
      return pyramid11;
    } else if (pageRank <= 10) {
      return pyramid1; // 例: 1位から10位までの画像
    } else if (pageRank <= 20) {
      return pyramid2; // 例: 1位から10位までの画像
    } else if (pageRank <= 30) {
      return pyramid3; // 例: 1位から10位までの画像
    } else if (pageRank <= 40) {
      return pyramid4; // 例: 1位から10位までの画像
    } else if (pageRank <= 50) {
      return pyramid5; // 例: 1位から10位までの画像
    } else if (pageRank <= 60) {
      return pyramid6; // 例: 1位から10位までの画像
    } else if (pageRank <= 70) {
      return pyramid7; // 例: 1位から10位までの画像
    } else if (pageRank <= 80) {
      return pyramid8; // 例: 1位から10位までの画像
    } else if (pageRank <= 90) {
      return pyramid9; // 例: 1位から10位までの画像
    } else {
      return pyramid10; // 例: 51位から100位までの画像
    }
  };

  const getTimeRankImage = (timeRank) => {
    if (timeRank === null) {
      return pyramid11;
    } else if (timeRank <= 10) {
      return pyramid1; // 例: 1位から10位までの画像
    } else if (timeRank <= 20) {
      return pyramid2; // 例: 1位から10位までの画像
    } else if (timeRank <= 30) {
      return pyramid3; // 例: 1位から10位までの画像
    } else if (timeRank <= 40) {
      return pyramid4; // 例: 1位から10位までの画像
    } else if (timeRank <= 50) {
      return pyramid5; // 例: 1位から10位までの画像
    } else if (timeRank <= 60) {
      return pyramid6; // 例: 1位から10位までの画像
    } else if (timeRank <= 70) {
      return pyramid7; // 例: 1位から10位までの画像
    } else if (timeRank <= 80) {
      return pyramid8; // 例: 1位から10位までの画像
    } else if (timeRank <= 90) {
      return pyramid9; // 例: 1位から10位までの画像
    } else if (timeRank <= 100) {
      return pyramid10; // 例: 1位から10位までの画像
    } else {
      return pyramid11; // 例: 圏外の画像
    }
  };

  return (
    <>
      <div className='sp-fixed-menu'>
        <ul>
          <li onClick={() => handleClick(navigate, 'Top')}>社内図書館システム(マイページ)</li>
          <li onClick={() => handleClick(navigate, 'Top')}>戻る</li>
        </ul> 
      </div>
      <div className='main-page'></div>
      <div className='area'>
        <div className='pyramid-page'>
            <img src={getPageRankImage(pageRank)} alt={`Rank ${pageRank}`} style={{ width: '150px' }}/>
        </div>
        <div className='score-area'>
          <div className='score-page'>
            <img className='clock' src={book5} alt='Book' />
            <p className='page-rank'>{pageRank}位</p>
          </div>
          <div className='score-time'>
            <img className='clock' src={clock} alt='Clock' />
            <p className='time-rank'>{timeRank}位</p>
          </div>
        </div>
        <div className='pyramid-time'>
          <img src={getTimeRankImage(timeRank)} alt={`Rank ${timeRank}`} style={{ width: '150px' }}/>
        </div>
      </div>
      <div className='regi'>
        <div className='regi-top'>
          <div className='regi-page'>
            <img className='clock' src={book5} alt='Book' />
            <p className='page-num'>{pagesRead} page</p>
          </div>
          <div className='regi-time'>
            <img className='clock' src={clock} alt='Clock' />
            <p className='time-num'>{timeSpent} hour</p>
          </div>
          <ShowRankingPage pagesRead={pagesRead} onRankCalculated={handlePageRankCalculated} />
          <ShowRankingTime timeSpent={timeSpent} onRankCalculated={handleTimeRankCalculated} />
        </div>
        <p onClick={() => setShowInputs(!showInputs)} style={{ cursor: 'pointer', color: 'blue' }}>
          {showInputs ? '非表示' : '　'}
        </p>
        {showInputs && (
          <>
            <input
              type="number"
              placeholder="読んだページ数"
              value={pagesRead}
              onChange={(e) => setPagesRead(e.target.value)}
            />
            <input
              type="number"
              placeholder="読んだ時間"
              value={timeSpent}
              onChange={(f) => setTimeSpent(f.target.value)}
            />
          </>
        )}
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
      </div>
    </div>

    </>
  );
}

export default Myreport;
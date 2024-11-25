import React, { useState } from 'react';
import ShowRankingPage from './ShowRankingPage';
import ShowRankingTime from './ShowRankingTime';

const TestPage = () => {
  const [pagesRead, setPagesRead] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [pageRank, setPageRank] = useState(null);
  const [timeRank, setTimeRank] = useState(null);

  const handlePageRankCalculated = (calculatedRank) => {
    setPageRank(calculatedRank);
  };
  const handleTimeRankCalculated = (calculatedRank) => {
    setTimeRank(calculatedRank);
  };

  const getPageRankImage = (pageRank) => {
    if (pageRank === null) {
      return null;
    } else if (pageRank <= 10) {
      return 'gold-medal.png'; // 例: 1位から10位までの画像
    } else if (pageRank <= 50) {
      return 'silver-medal.png'; // 例: 11位から50位までの画像
    } else {
      return 'bronze-medal.png'; // 例: 51位から100位までの画像
    }
  };
  const getTimeRankImage = (timeRank) => {
    if (timeRank === null) {
      return null;
    } else if (timeRank <= 10) {
      return 'gold-medal.png'; // 例: 1位から10位までの画像
    } else if (timeRank <= 50) {
      return 'silver-medal.png'; // 例: 11位から50位までの画像
    } else {
      return 'bronze-medal.png'; // 例: 51位から100位までの画像
    }
  };

  return (
    <div>
      <h1>マイレポート</h1>
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
      <ShowRankingPage pagesRead={pagesRead} onRankCalculated={handlePageRankCalculated} />
      <ShowRankingTime timeSpent={timeSpent} onRankCalculated={handleTimeRankCalculated} />
      {pageRank !== null && (
        <div>
          <p>あなたの順位（ページ数）は: {pageRank}位です</p>
          <img src={getPageRankImage(pageRank)} alt={`Rank ${pageRank}`} />
        </div>
      )}
      {timeRank !== null && (
        <div>
          <p>あなたの順位（時間）は: {timeRank}位です</p>
          <img src={getTimeRankImage(timeRank)} alt={`Rank ${timeRank}`} />
        </div>
      )}
    </div>
  );
};

export default TestPage;
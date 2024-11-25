import React from 'react';
import { data } from './RankingData';

const ShowRankingPage = ({ pagesRead, onRankCalculated }) => {

  const calculateRank = () => {
    const pagesReadInt = parseInt(pagesRead);
    const tempData = [...data, { id: data.length + 1, pagesRead: pagesReadInt }];
    const sorted = tempData.sort((a, b) => b.pagesRead - a.pagesRead);
    const userRank = sorted.findIndex(user => user.pagesRead === pagesReadInt) + 1;

    if (userRank === 0) {
      onRankCalculated(null);
    } else {
      onRankCalculated(userRank);
    }
  };

  // ページ数が変更されたときにランキングを計算
  React.useEffect(() => {
    if (pagesRead) {
      calculateRank();
    }
  }, [pagesRead]);

  return null;
};

export default ShowRankingPage;
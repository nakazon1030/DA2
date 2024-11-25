import React from 'react';
import { data } from './RankingData';

const ShowRankingTime = ({ timeSpent, onRankCalculated }) => {

  const calculateRank = () => {
    const timeSpentInt = parseInt(timeSpent);
    const tempData = [...data, { id: data.length + 1, timeSpent: timeSpentInt }];
    const sorted = tempData.sort((a, b) => b.timeSpent - a.timeSpent);
    const userRank = sorted.findIndex(user => user.timeSpent === timeSpentInt) + 1;

    if (userRank === 0) {
      onRankCalculated(null);
    } else {
      onRankCalculated(userRank);
    }
  };

  // ページ数が変更されたときにランキングを計算
  React.useEffect(() => {
    if (timeSpent) {
      calculateRank();
    }
  }, [timeSpent]);

  return null;
};

export default ShowRankingTime;
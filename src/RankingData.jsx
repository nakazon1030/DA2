// RankingData.jsx
import React from 'react';

// 100人分のデータを作成
export const data = Array.from({ length: 100 }, (_, index) => {
  const pagesRead = Math.floor(Math.random() * 1000); // 0から999ページのランダムな数
  const timeSpent = Math.floor(pagesRead / 10); // ページ数に基づいて時間を計算（例：10ページにつき1時間）
  return {
    id: index + 1,
    pagesRead,
    timeSpent
  };
});

const RankingData = () => {
  return (
    <div>
      <h1>読書ランキング</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            ユーザー{user.id}: {user.pagesRead}ページ, {user.timeSpent}時間
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingData;
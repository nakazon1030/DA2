import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate(-1); // 前のページに戻る
  // };

  return (
    <div>
      <h1>サブページ</h1>
      <p>このページは詳細情報を表示します。</p>
      <button onClick={goBack}>戻る</button>
    </div>
  );
};

export default SubPage;
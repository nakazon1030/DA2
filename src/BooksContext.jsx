import React, { createContext, useContext } from 'react';

// AllBooks データを作成
const AllBooks = [
  {
    index: 0,
    title: "title1",
    image: "/path/to/book1.png",
    comment: "部長おすすめ",
    flag: 1,
  },
  {
    index: 1,
    title: "title2",
    image: "/path/to/book2.png",
    comment: "最近熱い",
    flag: 0,
  },
  {
    index: 2,
    title: "title3",
    image: "/path/to/book3.png",
    comment: "知る人ぞ知る名本",
    flag: 1,
  },
];

// コンテキストの作成
const BooksContext = createContext();

// コンテキストのプロバイダー
export const BooksProvider = ({ children }) => {
  return (
    <BooksContext.Provider value={AllBooks}>{children}</BooksContext.Provider>
  );
};

// コンテキストを使用するためのカスタムフック
export const useBooks = () => {
  return useContext(BooksContext);
};
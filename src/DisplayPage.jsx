import React from 'react';
import BookData from './BookData.jsx';

const DisplayPage = () => {
  return (
    <div>
      <h1>HTML Contents</h1>
      {BookData.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: book.htmlContent }} />
        </div>
      ))}
    </div>
  );
};

export default DisplayPage;
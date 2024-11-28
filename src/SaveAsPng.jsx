import html2canvas from 'html2canvas';
import { addHtmlContentToBook, BookData } from './BookData.jsx';
import { handleClick } from './handclick';
import { useNavigate } from 'react-router-dom';

export const saveAsPng = (elementId, bookId, navigate) => {


  const element = document.getElementById(elementId);
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;

    // BookDataのimagesリストに追加
    const book = BookData.find(book => book.id === bookId);
    if (book) {
      book.images.push(imgData);
      localStorage.setItem('bookData', JSON.stringify(BookData)); // ローカルストレージに保存
      handleClick(navigate, 'MyReport');
    }
  });
};
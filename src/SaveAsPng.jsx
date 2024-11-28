import html2canvas from 'html2canvas';
import { addHtmlContentToBook, BookData } from './BookData.jsx';

export const saveAsPng = (elementId, bookId) => {
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
    }
  });
};
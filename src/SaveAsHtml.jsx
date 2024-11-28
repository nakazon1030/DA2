import { addHtmlContentToBook } from './BookData.jsx';

export const saveAsHtml = (elementId, bookId) => {
  const element = document.getElementById(elementId);
  const htmlContent = element.outerHTML;
  addHtmlContentToBook(bookId, htmlContent); // HTMLコンテンツをリストに保存
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'design.html';
  link.click();
};
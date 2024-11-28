import { BookData as defaultBookData } from './BookData.jsx';

export const resetBookData = () => {
  localStorage.setItem('bookData', JSON.stringify(defaultBookData));
  window.location.reload(); // ページをリロードして変更を反映
};
import html2canvas from 'html2canvas';

export const saveAsPng = (elementId, bookId) => {
  const element = document.getElementById(elementId);
  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imgData;
    link.download = 'design.png';
    link.click();
  });
};
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import './TestPage.css'; // CSSファイルをリネーム
import { saveAsHtml } from './SaveAsHtml.jsx'; // インポート
import { handleClick } from './handclick.jsx';
import { saveAsPng } from './SaveAsPng.jsx';

const TestPage = () => {

  const navigate = useNavigate();

  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [fontSize, setFontSize] = useState(16);
  const [borderColor, setBorderColor] = useState('black');
  const [borderWidth, setBorderWidth] = useState(1);
  const [htmlContent, setHtmlContent] = useState('');
  const { id } = useParams();
  const intId = parseInt(id,10);
  const filteredArray = BookData.filter(item => item.id ===intId);
  console.log(filteredArray);

  const colors = [
    { name: 'Transparent', value: 'transparent' },
    { name: 'Light Blue', value: 'lightblue' },
    { name: 'Light Coral', value: 'lightcoral' },
    { name: 'Light Green', value: 'lightgreen' },
    { name: 'Light Yellow', value: 'lightyellow' },
    { name: 'Light Pink', value: 'lightpink' },
    { name: 'Light Gray', value: 'lightgray' },
    { name: 'Light Goldenrod Yellow', value: 'lightgoldenrodyellow' },
    { name: 'Light Cyan', value: 'lightcyan' },
    { name: 'Light Sea Green', value: 'lightseagreen' },
    { name: 'Light Steel Blue', value: 'lightsteelblue' },
  ];

  const textColors = [
    { name: 'Black', value: 'black' },
    { name: 'Red', value: 'red' },
    { name: 'Green', value: 'green' },
    { name: 'Blue', value: 'blue' },
    { name: 'Yellow', value: 'yellow' },
    { name: 'Magenta', value: 'magenta' },
    { name: 'Cyan', value: 'cyan' },
    { name: 'White', value: 'white' },
  ];

  const addElement = (type) => {
    const id = elements.length + 1;
    setElements([
      ...elements,
      {
        id,
        type,
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        text: type === 'text' ? 'テキスト' : '',
        color: colors[0].value,
        textColor: 'black',
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 1,
      },
    ]);
  };

  const saveAsImage = () => {
    const element = document.getElementById('designArea');
    html2canvas(element).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'design.png';
      link.click();
    });
  };
  const element = document.getElementById('designArea');

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setEditingText(element.text || '');
    setColor(element.color);
    setTextColor(element.textColor);
    setFontSize(element.fontSize);
    setBorderColor(element.borderColor);
    setBorderWidth(element.borderWidth);
  };

  const handleTextChange = (e) => {
    setEditingText(e.target.value);
    setElements(elements.map(el => el.id === selectedElement.id ? { ...el, text: e.target.value } : el));
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    setElements(elements.map(el => el.id === selectedElement.id ? { ...el, color: e.target.value } : el));
  };

  const handleTextColorChange = (e) => {
    setTextColor(e.target.value);
    setElements(elements.map(el => el.id === selectedElement.id ? { ...el, textColor: e.target.value } : el));
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    setElements(elements.map(el => el.id === selectedElement.id ? { ...el, fontSize: parseInt(e.target.value, 10) } : el));
  };

  const handleBorderColorChange = (e) => {
    setBorderColor(e.target.value);
    setElements(elements.map(el => el.id === selectedElement.id ? { ...el, borderColor: e.target.value } : el));
  };

  const handleBorderWidthChange = (e) => {
    setBorderWidth(e.target.value);
    setElements(elements.map(el => el.id === selectedElement.id ? { ...el, borderWidth: parseInt(e.target.value, 10) } : el));
  };


  return (
    <div>
      <div className='sp-fixed-menu'>
        <ul>
          <li onClick={() => handleClick(navigate, 'Top')}>社内図書館システム(マイページ)</li>
          <li onClick={() => handleClick(navigate, 'Top')}>戻る</li>
        </ul> 
      </div>
      <div className='mainArea'>
      <button onClick={() => addElement('text')}>テキストボックスを追加</button>
      <button onClick={() => addElement('rect')}>長方形を追加</button>
      <button onClick={() => addElement('circle')}>円を追加</button>
      <button onClick={() => addElement('triangle')}>三角形を追加</button>
      <button onClick={() => saveAsPng('designArea', selectedBookId)}>PNGとして保存</button>
      <button onClick={() => saveAsHtml('designArea', selectedBookId)}>HTMLとして保存</button>
      {selectedElement && (
        <div style={{ marginTop: '10px' }}>
          {selectedElement.type === 'text' && (
            <>
              <input
                type="text"
                value={editingText}
                onChange={handleTextChange}
                style={{ marginRight: '10px' }}
              />
              <select value={textColor} onChange={handleTextColorChange} style={{ marginRight: '10px' }}>
                {textColors.map((color) => (
                  <option key={color.value} value={color.value}>{color.name}</option>
                ))}
              </select>
              <input
                type="number"
                value={fontSize}
                onChange={handleFontSizeChange}
                min="1"
                style={{ marginRight: '10px' }}
              />
            </>
          )}
          <select value={color} onChange={handleColorChange} style={{ marginRight: '10px' }}>
            {colors.map((color) => (
              <option key={color.value} value={color.value}>{color.name}</option>
            ))}
          </select>
          <select value={borderColor} onChange={handleBorderColorChange} style={{ marginRight: '10px' }}>
            {textColors.map((color) => (
              <option key={color.value} value={color.value}>{color.name}</option>
            ))}
          </select>
          <input
            type="number"
            value={borderWidth}
            onChange={handleBorderWidthChange}
            min="0"
            style={{ marginRight: '10px' }}
          />
        </div>
      )}
      <div
        id="designArea"
        className="design-area" // クラス名を追加
      >
        {elements.map((el) => (
          <Rnd
            key={el.id}
            default={{
              x: el.x,
              y: el.y,
              width: el.width,
              height: el.height,
            }}
            bounds="parent"
            onMouseDown={() => handleElementClick(el)} // onClickからonMouseDownに変更
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                border: el.type === 'circle' ? 'none' : `${el.borderWidth}px solid ${el.borderColor}`,
              }}
            >
              {el.type === 'rect' && (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: el.color,
                  }}
                />
              )}
              {el.type === 'circle' && (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: el.color,
                    borderRadius: '50%',
                    boxSizing: 'border-box',
                    border: `${el.borderWidth}px solid ${el.borderColor}`,
                  }}
                />
              )}
              {el.type === 'triangle' && (
                <div
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: '50px solid transparent',
                    borderRight: '50px solid transparent',
                    borderBottom: `100px solid ${el.color}`,
                  }}
                />
              )}
              {el.type === 'text' && (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: el.color === 'transparent' ? 'transparent' : el.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: el.textColor,
                    fontSize: `${el.fontSize}px`,
                    border: `${el.borderWidth}px solid ${el.borderColor}`,
                  }}
                >
                  {el.text}
                </div>
              )}
            </div>
          </Rnd>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TestPage;
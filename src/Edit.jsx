import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import './Edit.css'; // CSSファイルをリネーム

const Edit = () => {
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);
    const [editingText, setEditingText] = useState('');
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('black');
    const [fontSize, setFontSize] = useState(16);
    const [borderColor, setBorderColor] = useState('black');
    const [borderWidth, setBorderWidth] = useState(1);
  
    const colors = [
      { name: '無色', value: 'transparent' },
      { name: '水', value: 'lightblue' },
      { name: 'ストロベリー', value: 'lightcoral' },
      { name: 'ライム', value: 'lightgreen' },
      { name: 'レモン', value: 'lightyellow' },
      { name: 'ピーチ', value: 'lightpink' },
      { name: 'ゴマ', value: 'lightgray' },
      { name: 'ナシ', value: 'lightgoldenrodyellow' },
      { name: 'ソーダ', value: 'lightcyan' },
      { name: 'エメラルド', value: 'lightseagreen' },
      { name: 'ブルーベリー', value: 'lightsteelblue' },
    ];
  
    const textColors = [
      { name: '黒', value: 'black' },
      { name: '赤', value: 'red' },
      { name: '緑', value: 'green' },
      { name: '青', value: 'blue' },
      { name: '黄', value: 'yellow' },
      { name: 'マゼンタ', value: 'magenta' },
      { name: '水色', value: 'cyan' },
      { name: '白', value: 'white' },
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

    const saveAsHtml = () => {
      const element = document.getElementById('designArea');
      const htmlContent = element.outerHTML;
      setHtmlContent(htmlContent); 
      console.log(htmlContent);
      // const blob = new Blob([htmlContent], { type: 'text/html' });
      // const link = document.createElement('a');
      // link.href = URL.createObjectURL(blob);
      // link.download = 'design.html';
      // link.click();
      //上記はダウンロード機能を使いたい場合有効化してください。
    };
  
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
    const deleteElement = () => {
      if (selectedElement) {
        setElements(elements.filter(el => el.id !== selectedElement.id));
        setSelectedElement(null);
      }};
  
    return (
      <>
        <div className='addArea'>
          <button onClick={() => addElement('text')}>テキストボックス</button>
          <button onClick={() => addElement('rect')}>長方形</button>
          <button onClick={() => addElement('circle')}>円</button>
          <button onClick={() => addElement('triangle')}>三角形</button>
        </div>
        <div className='saveAndDeleateArea'>
          <button className='saveBtn'onClick={saveAsHtml}>保存</button>
          <button onClick={deleteElement}>選択した要素を消去</button>
        </div>

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
                    border: el.type === 'text' ? 'none' : `${el.borderWidth}px solid ${el.borderColor}`, // 修正
                  }}
                  >
                    {el.text}
                  </div>
                )}
              </div>
            </Rnd>
          ))}
        </div>
        {selectedElement && 
          (
            <div style={{ marginTop: '10px' }}>
              <div className='figreEditArea'>
                <p className='editTitle'>図形編集</p>
                <ul className='editItem'>
                <p className='editPtag'>背景</p>
                <select value={color} onChange={handleColorChange} style={{ marginRight: '10px' }}>
                  {colors.map((color) => (
                    <option key={color.value} value={color.value}>{color.name}</option>
                  ))}
                </select>
                </ul>
                <ul className='editItem'>
                <p className='editPtag'>枠</p>
                <select value={borderColor} onChange={handleBorderColorChange} style={{ marginRight: '10px' }}>
                  {textColors.map((color) => (
                    <option key={color.value} value={color.value}>{color.name}</option>
                  ))}
                </select>
                </ul>
                <ul className='editItem'>
                <p className='editPtag'>枠線太さ</p>
                <input
                type="number"
                value={borderWidth}
                onChange={handleBorderWidthChange}
                min="0"
                style={{ marginRight: '10px' }}
                />
                </ul>
              </div>
              <div className='textEditArea'>
                <p className='editTitle'>テキスト編集</p>
                {selectedElement.type === 'text' && (
                  <>
                    <ul className='editItem'>
                      <div className='textEditAreaInput'>
                      <input
                        type="text"
                        value={editingText}
                        onChange={handleTextChange}
                        style={{ marginRight: '10px' }}
                      />
                      </div>
                    </ul>
                    <ul className='editItem'>
                      <p className='editPtag'>色</p>
                      <select value={textColor} onChange={handleTextColorChange} style={{ marginRight: '10px' }}>
                        {textColors.map((color) => (
                          <option key={color.value} value={color.value}>{color.name}</option>
                        ))}
                      </select>
                    </ul>
                    <ul className='editItem'>
                      <p className='editPtag'>Font Size</p>
                    <input
                      type="number"
                      value={fontSize}
                      onChange={handleFontSizeChange}
                      min="1"
                      style={{ marginRight: '10px' }}
                    />
                    </ul>
                  </>
                )}
              </div> 
            </div>
          )
        }
      </>
  );
};

export default Edit;
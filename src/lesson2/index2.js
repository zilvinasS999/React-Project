import './/index2.css';

import { useState, useRef } from 'react';
function App() {
  const colorsArr = [
    {
      name: 'INDIANRED',
      hex: '#CD5C5C',
      rgb: 'RGB(205, 92, 92)',
      families: ['red', 'brown'],
    },
    {
      name: 'LIGHTCORAL',
      hex: '#F08080',
      rgb: 'RGB(240, 128, 128)',
      families: ['red', 'pink', 'coral', 'light'],
    },
    {
      name: 'SALMON',
      hex: '#FA8072',
      rgb: 'RGB(250, 128, 114)',
      families: ['red', 'pink', 'orange', 'salmon'],
    },
    {
      name: 'DARKSALMON',
      hex: '#E9967A',
      rgb: 'RGB(233, 150, 122)',
      families: ['red', 'pink', 'orange', 'salmon', 'dark'],
    },
    {
      name: 'LIGHTSALMON',
      hex: '#FFA07A',
      rgb: 'RGB(255, 160, 122)',
      families: ['red', 'pink', 'orange', 'salmon', 'light'],
    },
    {
      name: 'CRIMSON',
      hex: '#DC143C',
      rgb: 'RGB(220, 20, 60)',
      families: ['red'],
    },
    {
      name: 'RED',
      hex: '#FF0000',
      rgb: 'RGB(255, 0, 0)',
      families: ['red'],
    },
    {
      name: 'DARKRED',
      hex: '#8B0000',
      rgb: 'RGB(139, 0, 0)',
      families: ['red', 'dark'],
    },
    {
      name: 'PINK',
      hex: '#FFC0CB',
      rgb: 'RGB(255, 192, 203)',
      families: ['pink'],
    },
    {
      name: 'LIGHTPINK',
      hex: '#FFB6C1',
      rgb: 'RGB(255, 182, 193)',
      families: ['pink', 'light'],
    },
  ];

  const inpRef = useRef();
  const [getAdd, setAdd] = useState(0);

  const [getSize, setSize] = useState(0);
  const [getSelectedColor, setSelectedColor] = useState('#ffffff');
  const [coloredBoxes, setColoredBoxes] = useState([]);
  const [getText, setText] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleAddItem = () => {
    setColoredBoxes((prevColoredBoxes) => [
      ...prevColoredBoxes,
      getSelectedColor,
    ]);
    inpRef.current.style.backgroundColor = getSelectedColor;
  };

  const insertText = () => {
    setText(inpRef.current.value);
  };

  return (
    <div className='App'>
      <div className='content-left'>
        <input type='text' ref={inpRef} />
        <div className='color-wrapper'>
          {colorsArr.map((color, index) => (
            <div
              className='box'
              key={index}
              style={{ backgroundColor: color.hex }}
              onClick={() => {
                handleColorClick(color.hex);
              }}
            ></div>
          ))}
        </div>
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className='content-right'>
        <div className='progress-bar'>
          <div style={{ width: getSize + '%' }}></div>
        </div>
        {coloredBoxes.map((color, index) => (
          <input
            type='text'
            style={{ backgroundColor: color }}
            placeholder={insertText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

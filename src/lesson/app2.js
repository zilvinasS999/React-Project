import './app2.css';
import { useState } from 'react';

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
  const [counter, setCounter] = useState(0);
  const [upgradeLevel, setUpgradeLevel] = useState(1);
  const [getImg, setImg] = useState({
    backgroundImage:
      'https://w7.pngwing.com/pngs/622/427/png-transparent-cookie-clicker-clicker-heroes-peanut-butter-cookie-biscuits-chocolate-chip-cookie-others-miscellaneous-baked-goods-food.png',
    toggle: false,
  });
  const [getColor, setColor] = useState('');

  function addCounter() {
    setCounter(counter + upgradeLevel);
  }

  const handleSubtract = () => {
    if (counter >= 10) {
      setCounter(counter - 10);
      if (upgradeLevel === 1) {
        setUpgradeLevel(2);
      } else {
        setUpgradeLevel(upgradeLevel + 2);
      }
    }
  };

  const handleSubtract5 = () => {
    if (counter >= 20) {
      setCounter(counter - 20);
      if (upgradeLevel === 1) {
        setUpgradeLevel(5);
      } else {
        setUpgradeLevel(upgradeLevel + 5);
      }
    }
  };

  const upgrade50 = () => {
    if (counter >= 50) {
      return setCounter(counter - 50);
    }
  };

  const changeImg = () => {
    console.log('changing img');
    setImg((prevImg) => {
      const toggle = !prevImg.toggle;
      const newImage = toggle
        ? 'https://famouscookies.com/wp-content/uploads/2020/11/Famous-Cookie-Cocolate-Chip-21-1600x1600-1.png'
        : 'https://w7.pngwing.com/pngs/622/427/png-transparent-cookie-clicker-clicker-heroes-peanut-butter-cookie-biscuits-chocolate-chip-cookie-others-miscellaneous-baked-goods-food.png';

      return {
        ...prevImg,
        toggle: toggle,
        backgroundImage: newImage,
      };
    });
  };

  const changeColor = () => {
    if (counter >= 50) {
      setCounter((prevCounter) => prevCounter - 50);

      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;

      setColor(randomColor);
    }
  };

  return (
    <div className='App'>
      <div className='clicker' style={{ backgroundColor: getColor }}>
        <div
          className='cookie-image'
          onClick={addCounter}
          style={{ backgroundImage: `url(${getImg.backgroundImage})` }}
        ></div>
        <h1>counter:{counter}</h1>
      </div>
      <div className='shop'>
        <button className='upgrade 2-points' onClick={handleSubtract}>
          Upgrade to 2 Points costs 10 points
        </button>
        <button className='upgrade 5-points' onClick={handleSubtract5}>
          Upgrade to 5 Points costs 20 points
        </button>
        <button
          onClick={() => {
            upgrade50();
            changeImg();
          }}
        >
          Change cookie image costs 50 points
        </button>
        <button className='bg-color' onClick={changeColor}>
          Change background color costs 50 points
        </button>
      </div>
    </div>
  );
}

export default App;

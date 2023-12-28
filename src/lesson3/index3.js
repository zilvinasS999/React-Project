import './index3.css';

import { useState, useEffect } from 'react';
function App() {
  // const inp = useRef();
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemeyHealth] = useState(100);
  // const [gameOver, setGameOver] = useState(false);
  const [money, setMoney] = useState(0);
  const [selectedWeapon, setSelectedWeapon] = useState(0);
  const [monsterImg, setMonsterImg] = useState(0);

  const monsters = [
    'https://img.freepik.com/premium-vector/cartoon-monster-pixel-design_61878-706.jpg?w=360',
    'https://img.freepik.com/premium-vector/cartoon-monster-pixel-design_61878-728.jpg?w=2000',
    'https://img.freepik.com/premium-vector/cartoon-monster-pixel-design_61878-712.jpg?w=2000',
    'https://img.freepik.com/premium-vector/monster-pixel-design_61878-702.jpg?w=2000',
    'https://img.freepik.com/premium-vector/cartoon-monster-cat-pixel-design_61878-713.jpg?size=626&ext=jpg',
    'https://img.freepik.com/premium-vector/cartoon-monster-pixel-design_61878-707.jpg?w=360',
  ];

  useEffect(() => {
    const savedState = localStorage.getItem('gameState');

    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setPlayerHealth(parsedState.playerHealth);
      setEnemeyHealth(parsedState.enemyHealth);
      setMoney(parsedState.money);
      setSelectedWeapon(parsedState.selectedWeapon);
      setMonsterImg(parsedState.monsterImg);
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    const newGame = () => {
      setPlayerHealth(100);
      setEnemeyHealth(100);
      setMoney(0);
      setSelectedWeapon('');
      setMonsterImg(0);
    };

    const savedState = localStorage.getItem('gameState');

    if (!savedState) {
      newGame();
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    saveGameState();
  }, [playerHealth, enemyHealth, money, selectedWeapon, monsterImg]);

  function attackEnemy() {
    // if (gameOver) return;

    // const playerDamage = Math.floor(Math.random() * 10) + 1;
    const swordDmg = Math.floor(Math.random() * 8) + 1;
    const bowDmg = Math.floor(Math.random() * 9) + 1;
    const wandDmg = Math.floor(Math.random() * 7) + 1;
    const doubleBow = Math.floor(Math.random() * 4) + 1;
    const healing = Math.floor(Math.random() * 10) + 1;

    console.log(wandDmg);
    // console.log(doubleBow);
    console.log(healing);
    console.log(`Player health ${playerHealth}`);
    const calculateDamage = () => {
      if (selectedWeapon === 'sword') {
        return swordDmg;
      } else if (selectedWeapon === 'bow') {
        return doubleBow === 1 ? bowDmg * 2 : bowDmg;
      } else if (selectedWeapon === 'wand') {
        if (healing <= 3) {
          setPlayerHealth((prevHealth) => Math.min(100, prevHealth + 10)); // Heal player, limited to 100 health
          return 0; // No damage to the enemy
        }
        return wandDmg;
      }
      return 0; // Default to 0 damage if no weapon is selected
    };

    setEnemeyHealth((prevHealth) => {
      const newHealth = Math.max(0, prevHealth - calculateDamage());

      if (newHealth <= 0) {
        setMonsterImg(Math.floor(Math.random() * 5) + 1);

        return 100; // Reset enemy health to 100 if it goes below 0
      }
      console.log('Enemy Health:', newHealth);
      return newHealth;
    });

    // if (enemyHealth - playerDamage <= 0) {
    //   setGameOver(true);
    // }

    // const newHealth = Math.max(0, enemyHealth - swordDmg);

    // if (newHealth <= 0) {
    //   setMonsterImg(Math.floor(Math.random() * 5) + 1);
    //   setEnemeyHealth(100);
    // } else {
    //   setEnemeyHealth(newHealth);
    // }

    // console.log('Enemy Health:', newHealth);
  }
  function attackPlayer() {
    // if (gameOver) return;

    let enemyDamage = Math.floor(Math.random() * 7) + 1;
    const dodgeAttack = Math.floor(Math.random() * 5) + 1;

    setPlayerHealth((prevHealth) => Math.max(0, prevHealth - enemyDamage));
    // console.log(enemyDamage);
    // console.log(dodgeAttack);
    if (selectedWeapon === 'sword') {
      if (dodgeAttack === 1) {
        return (enemyDamage = 0);
      }
      // if (playerHealth - enemyDamage <= 0) {
      //   setGameOver(true);
      // }
    }
  }
  function addGold() {
    const moneyEarned = Math.floor(Math.random() * 5) + 1;
    setMoney((prevMoney) => prevMoney + moneyEarned);
  }

  // function totalGold() {
  //   return counter + addGold();
  // }

  function handleBtnOnClick() {
    if (!selectedWeapon) {
      console.log('Select a weapon before attacking');
      return; // Don't proceed with the attack if no weapon is selected
    }
    attackEnemy();
    attackPlayer();
    addGold();
  }

  function heal() {
    if (money >= 50) {
      setMoney((prevMoney) => prevMoney - 50);
      setPlayerHealth(100);
    }
  }

  function handleWeapon(weapon) {
    setSelectedWeapon(weapon);
  }

  const startNewGame = () => {
    setPlayerHealth(100);
    setEnemeyHealth(100);
    setMoney(0);
    setSelectedWeapon('');
    setMonsterImg(0);
  };

  const saveGameState = () => {
    const gameState = {
      playerHealth,
      enemyHealth,
      money,
      selectedWeapon,
      monsterImg,
    };

    localStorage.setItem('gameState', JSON.stringify(gameState));
  };

  const handleSave = () => {
    saveGameState();
    alert('Game saved!');
  };

  const handleLoad = () => {
    const savedState = localStorage.getItem('gameState');

    if (savedState) {
      const parsedState = JSON.parse(savedState);
      setPlayerHealth(parsedState.playerHealth);
      setEnemeyHealth(parsedState.enemyHealth);
      setMoney(parsedState.money);
      setSelectedWeapon(parsedState.selectedWeapon);
      setMonsterImg(parsedState.monsterImg);
      alert('Game loaded!');
    } else {
      alert('No saved game found.');
    }
  };

  const handleNewGame = () => {
    startNewGame();
    saveGameState();
    alert('New game started!');
  };
  return (
    <div className='App'>
      <div className='player'>
        <img src='' alt='' />
        <div className='player-bar'>
          <div
            className='player-health'
            style={{ width: `${playerHealth}%` }}
          ></div>
        </div>
        <div className='weapons'>
          <div
            className={`sword ${selectedWeapon === 'sword' ? 'selected' : ''}`}
            onClick={() => handleWeapon('sword')}
          >
            Sword
          </div>
          <div
            className={`bow ${selectedWeapon === 'bow' ? 'selected' : ''}`}
            onClick={() => handleWeapon('bow')}
          >
            Bow
          </div>
          <div
            className={`wand ${selectedWeapon === 'wand' ? 'selected' : ''}`}
            onClick={() => handleWeapon('wand')}
          >
            Wand
          </div>
        </div>
      </div>
      <h2 className='gold-counter'>Gold: {money}</h2>
      <button
        className='attack-btn'
        onClick={handleBtnOnClick}
        // disabled={gameOver}
      >
        Attack
      </button>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6dpMOTF_IDMFpIehfGpU0mfN-ALd_LWkWA&usqp=CAU'
        alt=''
        className='hp-potion'
        onClick={heal}
      />

      <h2 className='price'>Price: 50</h2>
      <div className='enemy'>
        <div className='enemy-bar'>
          <div
            className='enemy-health'
            style={{ width: `${enemyHealth}%` }}
          ></div>
          <img src={monsters[monsterImg]} alt='' className='enemy-img' />
        </div>
      </div>
      <button onClick={handleSave}>Save Game</button>
      <button onClick={handleLoad}>Load Game</button>
      <button onClick={handleNewGame}>New Game</button>
    </div>
  );
}
export default App;

import React, { useState } from 'react';
import './App.css';
import useStore from './store/myStore';
import Minecraft from './minecraft/Minecraft';

function App() {
  const store = useStore();

  return (
    <div>
      <Minecraft store={store} />
    </div>
  );
}

export default App;

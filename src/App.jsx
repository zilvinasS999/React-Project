import React, { useState } from 'react';
import './App.css';
import useStore from './store/myStore';

function App() {
  const { counter, increment, decrement } = useStore();

  return <div></div>;
}

export default App;

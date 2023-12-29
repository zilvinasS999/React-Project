import React from 'react';
import useStore from '../store/myStore';

function CraftingTable() {
  const store = useStore();
  return (
    <div className='table'>
      <div className='crafted-item'></div>
      <div className='items-to-craft'>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
      </div>
    </div>
  );
}

export default CraftingTable;

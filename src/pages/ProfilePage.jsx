import React, { useState } from 'react';
import { useStore } from '../store/myStore';
import Navigation from '../components/Navigation';

function ProfilePage() {
  const [newUsername, setNewUsername] = useState('');
  const { currentUser, changeUsername } = useStore((state) => ({
    currentUser: state.myUser,
    changeUsername: state.changeUsername,
  }));

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const updateUsername = () => {
    if (!newUsername.trim()) {
      alert('Please enter a new username.');
      return;
    }
    if (newUsername === currentUser.username) {
      alert('This is already your username.');
      return;
    }
    changeUsername(newUsername);
    setNewUsername('');
  };

  return (
    <div>
      <Navigation />
      <input
        type='text'
        value={newUsername}
        onChange={handleUsernameChange}
        placeholder='Enter new username'
      />
      <button onClick={updateUsername}>Change Username</button>
    </div>
  );
}

export default ProfilePage;

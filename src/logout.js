// src/LogoutButton.js
import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('User logged out');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

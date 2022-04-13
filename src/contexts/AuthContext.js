import React, { createContext, useState } from 'react';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(Boolean(localStorage.getItem('token')));

  const connectUser = (token) => {
    localStorage.setItem('token', token);
    setIsConnected(true);
  };

  const disconnectUser = () => {
    localStorage.removeItem('token');
    setIsConnected(false);
  };

  const auth = {
    isConnected,
    connectUser,
    disconnectUser,
  };

  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;

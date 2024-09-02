import React, { createContext, useState } from 'react';
import axiosInstance from 'api/axios';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.get('/users/current');
      setUser(response.data);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

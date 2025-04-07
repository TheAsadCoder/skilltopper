import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [adminId, setAdminId] = useState('');

  return (
    <AuthContext.Provider value={{adminId, setAdminId}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useProvider = () => useContext(AuthContext);

export default AuthProvider;
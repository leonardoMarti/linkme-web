import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const useAuth = () => {
  const { user, signIn, createAccount } = useContext(AuthContext);

  return { user, signIn, createAccount };
};

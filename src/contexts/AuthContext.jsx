import { createContext, useState } from 'react';

import { SnackBar } from '../common/components/SnackBar';

import { SessionService } from '../common/services/sessionService';
import { UserService } from '../common/services/userService';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();

  const createAccount = async (data) => {
    try {
      await UserService.save(data);
      SnackBar.SUCCESS('Conta criada');
    } catch (e) {
      SnackBar.ERROR(e?.data?.error || 'Falha na criação');
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const { data } = await SessionService.signIn({
        email,
        password,
      });
      setUser(data);
      return data;
    } catch (e) {
      SnackBar.ERROR(e?.data?.error || 'Falha no login');
    }
  };

  const context = {
    user,
    signIn,
    createAccount,
  };

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

import { createContext, useEffect, useState } from 'react';

import { SnackBar } from '../common/components/SnackBar';

import { setStorage, getStorage } from '../common/utils/storage';

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
      setStorage('login', data);
      return data;
    } catch (e) {
      SnackBar.ERROR(e?.data?.error || 'Falha no login');
    }
  };

  const findUserByPk = async (id) => {
    const { data } = await UserService.findByPk({ userId: id });
    if (data) {
      setUser(data);
      setStorage('login', data);
    }
  };

  useEffect(() => {
    const { user: userData } = getStorage('login');
    if (userData) findUserByPk(userData?.id);
  }, []);

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

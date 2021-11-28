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

      const { token, user } = data;
      setUser({ ...user, token });
      setStorage('user', user);
      setStorage('token', token);
      return data;
    } catch (e) {
      SnackBar.ERROR(e?.data?.error || 'Falha no login');
    }
  };

  const findUserByPk = async (id) => {
    const { data } = await UserService.findByQuery({ id });

    if (data?.length) {
      setUser(data[0]);
      setStorage('user', data[0]);
    }
  };

  useEffect(() => {
    const userData = getStorage('user');
    if (userData?.id) findUserByPk(userData?.id);
  }, []);

  const context = {
    user,
    signIn,
    createAccount,
  };

  return <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>;
};

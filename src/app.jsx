import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PAGES } from './common/pages';

import { AuthContextProvider } from './contexts/AuthContext';

import { ToastSnackBar } from './common/components/ToastSnackBar';

import { SignIn } from './app/SignIn';
import { Appointment } from './app/Appointment';
import { UserManagement } from './app/UserManagement';
import { CreateAccount } from './app/CreateAccount';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ToastSnackBar />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/appointment" component={Appointment} />
          <Route
            path={PAGES.USERMANAGEMENT}
            component={UserManagement}
          />
          <Route
            path={PAGES.CREATEACCOUNT}
            component={CreateAccount}
          />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

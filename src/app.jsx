import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PAGES } from './common/pages';

import { AuthContextProvider } from './contexts/AuthContext';

import { ToastSnackBar } from './common/components/ToastSnackBar';

import { SignIn } from './app/SignIn';
import { UserManagement } from './app/UserManagement';
import { CreateAccount } from './app/CreateAccount';
import { CandidateProfile } from './app/CandidateProfile';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ToastSnackBar />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route
            path={PAGES.USERMANAGEMENT}
            component={UserManagement}
          />
          <Route
            path={PAGES.CREATEACCOUNT}
            component={CreateAccount}
          />
          <Route
            path={PAGES.CANDIDATEPROFILE}
            component={CandidateProfile}
          />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

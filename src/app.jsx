import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

import { Login } from "./app/Login";
import { Appointment } from "./app/Appointment";
import { ManageAppointment } from "./app/ManageAppointment";

export const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/manage-appointment" component={ManageAppointment} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

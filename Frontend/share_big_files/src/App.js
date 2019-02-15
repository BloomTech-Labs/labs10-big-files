import React, { Component } from "react";
import LandingView from "./views/landingview";
import CreateEditHolder from "./views/createeditholder";
<<<<<<< HEAD
// import { HomeViewHolder } from "./views/homeviewholder";
=======
// import {HomeViewHolder } from "./views/homeviewholder";
>>>>>>> 08afcc713c298c47fcf390143edb8ea9688eb613
import SettingsHolder from './views/settingsholder'; 
import BillingHolder from "./views/billingholder";
import Stripe from "./components/StripeFE";
import AddFileHolder from "./views/addfileholder";
import { Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
 

const AppContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Route exact path="/" render={props => <LandingView {...props} />} />

        <Route path="/stripe" render={props => <Stripe {...props} />} />
        <Route
          exact
          path="/add/"
          render={props => <AddFileHolder {...props} />}
        />

        <Route
          exact
          path="/settings/"
          render={props => <SettingsHolder {...props} />}
        />

        <Route
          exact
          path="/create/"
          render={props => <CreateEditHolder {...props} />}
        />
        <Route
          exact
          path="/billing/"
          render={props => <BillingHolder {...props} />}
        />

      </AppContainer>
    );
  }
}

// export default Authenticate(App); use when Auth0 set up
export default App;

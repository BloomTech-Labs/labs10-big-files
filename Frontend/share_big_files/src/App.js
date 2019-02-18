import React, { Component } from "react";
import LandingView from "./views/landingview";
import CreateEditHolder from "./views/createeditholder";

// import { HomeViewHolder } from "./views/homeviewholder";

import SettingsHolder from "./views/settingsholder";
import BillingHolder from "./views/billingholder";
import Stripe from "./components/StripeFE";
import AddFileHolder from "./views/addfileholder";
import { Route } from "react-router-dom";
import Authenticate from "./Auth/authenticate";
import "./App.css";
import styled from "styled-components";
import Auth from "./Auth/Auth";
import auth0 from 'auth0-js';
import { Auth0Lock } from 'auth0-lock';

const AppContainer = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const authLockOptions = {
  rememberLastLogin: false
}; 

const lock = new Auth0Lock('b6bFFU1t8pbHa0lk6GgPpaFhabemmWc8', 'lambdabackendproject.auth0.com', authLockOptions);

const webAuth = new auth0.WebAuth({
  domain: "lambdabackendproject.auth0.com",
  clientID: "b6bFFU1t8pbHa0lk6GgPpaFhabemmWc8",
  redirectUri: "https://sharebigfiles.netlify.com"
})

class App extends Component {
  constructor(props) {
    super(props);
    webAuth.parseHash((err, authResult) => {
      if (authResult) { 
        const { accessToken, expiresIn } = authResult;
        const expiresAt = JSON.stringify(
          expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("expires_at", expiresAt);
       
        return 
        // lock.show();
      } else if (err) console.log(err);
    }); 
  }
  handleAuth0Login = () => {
    lock.show();
  };
  isAuthenticated() {
    // check whether the current time is past the access token's expiry time
    const expiresAt = localStorage.getItem("expires_at");
    return new Date().getTime() < expiresAt;
  }

  componentDidMount() {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("accessToken");
    if (user_id && token) return this.props.logBackIn(user_id, token);
  }

  componentDidUpdate() {
  
  }

  render() {
    if (this.isAuthenticated() || localStorage.getItem("accessToken")) {
      return (
        <AppContainer>
          <Route
            exact
            path="/"
            render={props => <LandingView {...props} auth={this.auth} />}
          />

          <Route path="/stripe" render={props => <Stripe {...props} />} />
          <Route path="/add" render={props => <AddFileHolder {...props} />} />

          <Route
            exact
            path="/settings"
            render={props => <SettingsHolder {...props} />}
          />

          <Route
            exact
            path="/create"
            render={props => <CreateEditHolder {...props} />}
          />
          <Route
            exact
            path="/billing"
            render={props => <BillingHolder {...props} />}
          />
        </AppContainer>
      );
    } else {
      return (
        <div>
          <LandingView />
        </div>
      );
    }

  }
}

// export default Authenticate(App);
export default App;

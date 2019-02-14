import React, { Component } from "react";
import LandingView from "./views/landingview";
 
import CreateEditHolder from "./views/createeditholder";
// import {homeviewholder } from "./views/homeviewholder";
// import {settingsholder} from './views/settingsholder';
import BillingHolder from './views/billingholder';
import Stripe from './components/StripeFE'
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
        <Route path="/stripe" render={props =><Stripe {...props} />} />
 
        {/* <Route  path="/home/:files"  render={props =><createeditholder {...props}/>}/>
      
      <Route  path="/home/:setting/" render={props =><settingsholder {...props}/>}/>
       */}
       <Route  exact path="/home/:new/edit/" render={props =><CreateEditHolder {...props}/>}/>
       <Route  exact path="/home/:billing/" render={props =><BillingHolder {...props}/>}/>
 
 
      </AppContainer>

    );
  }
}

// export default Authenticate(App); use when Auth0 set up
export default App;

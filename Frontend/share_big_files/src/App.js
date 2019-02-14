import React, { Component } from "react";
import Landingview from "./views/landingview";
// import {createeditholder} from "./views/createeditholder";
// import {homeviewholder } from "./views/homeviewholder";
// import {settingsholder} from './views/settingsholder';
import BillingHolder from './views/billingholder';
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
        <Route exact path="/" render={props => <Landingview {...props} />} />
        {/* <Route exact path="/home/:files"  render={props =><createeditholder {...props}/>}/>
      <Route exact path="/home/:new/edit/" render={props =><homeviewholder {...props}/>}/>
      <Route exact path="/home/:setting/" render={props =><settingsholder {...props}/>}/>
       */}
       <Route exact path="/home/:billing/" render={props =><BillingHolder {...props}/>}/>
      </AppContainer>
    );
  }
}

// export default Authenticate(App); use when Auth0 set up
export default App;

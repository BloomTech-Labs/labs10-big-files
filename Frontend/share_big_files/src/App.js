import React, { Component } from "react";
import Landingview from "./views/landingview";
// import {createeditholder} from "./views/createeditholder";
// import {homeviewholder } from "./views/homeviewholder";
// import {settingsholder} from './views/settingsholder';
// import {billingholder} from './views/billingholder';
<<<<<<< HEAD
import Stripe from "./components/StripeFE" //
import {Route} from "react-router-dom";
import './App.css';
=======
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
>>>>>>> 9d5d616a3d8bcde6281b35c2fa3bf18af5476439

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      <Route exact path="/"             render={props =><Landingview {...props}/>}/>
      <Route path="/stripe" render={props =><Stripe {...props} />} />
      {/* <Route exact path="/home/:files"  render={props =><createeditholder {...props}/>}/>
=======
      <AppContainer>
        <Route exact path="/" render={props => <Landingview {...props} />} />
        {/* <Route exact path="/home/:files"  render={props =><createeditholder {...props}/>}/>
>>>>>>> 9d5d616a3d8bcde6281b35c2fa3bf18af5476439
      <Route exact path="/home/:new/edit/" render={props =><homeviewholder {...props}/>}/>
      <Route exact path="/home/:setting/" render={props =><settingsholder {...props}/>}/>
      <Route exact path="/home/:billing/" render={props =><billingholder {...props}/>}/> */}
      </AppContainer>
    );
  }
}

// export default Authenticate(App); use when Auth0 set up
export default App;

import React, { Component } from "react";
import LandingView from "./views/landingview";
// import {createeditholder} from "./views/createeditholder";
import { HomeViewHolder } from "./views/homeviewholder";
// import {settingsholder} from './views/settingsholder';
import BillingHolder from './views/billingholder';
import {Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/"             render={props =><LandingView {...props}/>}/>
      {/* <Route exact path="/home/:files"  render={props =><createeditholder {...props}/>}/>*/}
      <Route exact path="/home/:new/edit/" render={props =><HomeViewHolder {...props}/>}/>
   {/* <Route exact path="/home/:setting/" render={props =><settingsholder {...props}/>}/>*/}
      <Route exact path="/home/:billing/" render={props =><BillingHolder {...props}/>}/> 
      </div>
    );
  }
}

// export default Authenticate(App); use when Auth0 set up
export default App;

import React, { Component } from "react";
import Landingview from "./views/landingview";
// import {createeditholder} from "./views/createeditholder";
// import {homeviewholder } from "./views/homeviewholder";
// import {settingsholder} from './views/settingsholder';
// import {billingholder} from './views/billingholder';
import {Route} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/"             render={props =><Landingview {...props}/>}/>
      <Route path="/stripe"             render={(props) => {return <Stripe {...props} />}} />
      {/* <Route exact path="/home/:files"  render={props =><createeditholder {...props}/>}/>
      <Route exact path="/home/:new/edit/" render={props =><homeviewholder {...props}/>}/>
      <Route exact path="/home/:setting/" render={props =><settingsholder {...props}/>}/>
      <Route exact path="/home/:billing/" render={props =><billingholder {...props}/>}/> */}
      </div>
    );
  }
}

// export default Authenticate(App); use when Auth0 set up
export default App;

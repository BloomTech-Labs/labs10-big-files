import React from "react";
import LandingView from "../views/landingview"; 
import Auth from "./Auth";

const Authenticate = App =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (!localStorage.getItem('accessToken')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

 
 

    render() {
      if (this.state.loggedIn) return <App />;
      
      return  <LandingView/>;
    }
  };

export default Authenticate;

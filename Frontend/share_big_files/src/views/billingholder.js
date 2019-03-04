import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Billing from "./billing";
import Settings from "./settings";
import SignOut from "../components/signOut";
// import Dropdown from "./dropdown";

// import media from "../styledComponents/media.js";
import styled from "styled-components";

const BillingPage = styled.div`
// (props => <div {...props} />)
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1524122209929-5bc27bd9c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
 
  background-size: cover;
 
  @media(max-width: 390px) {
    width: 100%;
  }

`;


const MenuBillingDiv = styled.div`
  display: flex;
  @media(max-width: 390px) {
    width: 100%;
    flex-direction: column;
  }
`;

const BillingHolder = () => {
  return (
    <BillingPage>
      {/* <Dropdown/> */}
      <NavHeader />
      
      <MenuBillingDiv>
        <LeftMenu />
        <Billing />
        <Settings/>
        <SignOut/>
      </MenuBillingDiv>
    </BillingPage>
  );
};
export default BillingHolder;

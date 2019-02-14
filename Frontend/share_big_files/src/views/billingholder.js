import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Billing from "./billing";
import styled from "styled-components";

const MenuBillingDiv = styled.div`
  display: flex;
  
`;


const BillingHolder = () => {
  return (
    <div>
      <NavHeader />
      <MenuBillingDiv>
      <LeftMenu />
      <Billing />
      </MenuBillingDiv>
      
    </div>
  );
};
export default BillingHolder;

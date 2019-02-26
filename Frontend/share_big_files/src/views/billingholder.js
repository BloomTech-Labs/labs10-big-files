import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Billing from "./billing";
// import media from "../styledComponents/media.js";
import styled from "styled-components";

const BillingPage = styled.div`
// (props => <div {...props} />)
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("http://get.addonreviews.com/cmsimages/lp/fileshare/cloudbackground.jpg");

  background-size: 100% 100%;
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
      <NavHeader />
      <MenuBillingDiv>
        <LeftMenu />
        <Billing />
      </MenuBillingDiv>
    </BillingPage>
  );
};
export default BillingHolder;

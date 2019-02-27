import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import AddFile from "./addfile";
import SharedHolder from "./sharedholder";
import styled from "styled-components";

const AddFilePage = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("http://get.addonreviews.com/cmsimages/lp/fileshare/cloudbackground.jpg");
  background-size: 100% 100%;
  @media(max-width: 390px) {
   
  }
`;

const MenuFileHolder = styled.div`
  display: flex;
  @media(max-width: 390px) {
    display: block;
  }
`;

const AddFileHolder = props => {
  return (
    <AddFilePage>
      <NavHeader logout={props.logout} />
      <MenuFileHolder>
        <LeftMenu />
        <SharedHolder />
        <AddFile />
      </MenuFileHolder>
    </AddFilePage>
  );
};
export default AddFileHolder;

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
`;

const MenuFileHolder = styled.div`
  display: flex;
`;

const AddFileHolder = () => {
  return (
    <AddFilePage>
      <NavHeader />
      <MenuFileHolder>
        <LeftMenu />
        <SharedHolder/>
        <AddFile />
      </MenuFileHolder>
    </AddFilePage>
  );
};
export default AddFileHolder;

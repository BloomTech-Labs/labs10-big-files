import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import CreateFile from "./createedit";
import styled from "styled-components";

const CreatePage = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  //background-image: url("http://get.addonreviews.com/cmsimages/lp/fileshare/cloudbackground.jpg");
  background-size: 100% 100%;
`;
const CreateEditDiv = styled.div`
  display: flex;
`;
const CreateEditHolder = () => {
  return (
    <CreatePage>
      <NavHeader />
      <CreateEditDiv>
        <LeftMenu />
        <CreateFile />
      </CreateEditDiv>
      </CreatePage>
  );
};

export default CreateEditHolder;

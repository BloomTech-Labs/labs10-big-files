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
  background-image: url("https://i.pinimg.com/originals/1a/a6/4d/1aa64df2e7a5e7679090cfcf5602c6e9.jpg")

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

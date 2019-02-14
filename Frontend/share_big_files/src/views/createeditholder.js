import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import CreateFile from "./createedit";
import styled from "styled-components";

const CreateEditDiv = styled.div`
  display: flex;
  height:500px;
`;

const CreateEditHolder = () => {
  return (
    <div>
      <NavHeader />
      <CreateEditDiv>
        <LeftMenu />
        <CreateFile />
      </CreateEditDiv>
    </div>
  );
};

export default CreateEditHolder;

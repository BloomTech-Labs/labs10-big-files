import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import CreateFile from "./createedit";
import styled from "styled-components";
import Dropdown from "./dropdown";


const CreatePage = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1524122209929-5bc27bd9c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-size: 100% 100%;
`;
const CreateEditDiv = styled.div`
  display: flex;
  @media(max-width: 390px) {
    display: block;
  }
`;
const CreateEditHolder = () => {
  return (
    <CreatePage>
      <Dropdown/>
      {/* <NavHeader /> */}
      <CreateEditDiv>
        <LeftMenu />
        <CreateFile />
      </CreateEditDiv>
      </CreatePage>
  );
};

export default CreateEditHolder;

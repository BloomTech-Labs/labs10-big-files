import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import AddFile from "./addfile";
import styled from "styled-components";

const MenuFileHolder = styled.div`
  display: flex;
  height: auto;
  border:1px solid red;
`;

const AddFileHolder = () => {
  return (
    <div>
      <NavHeader />
      <MenuFileHolder>
        <LeftMenu />
        <AddFile />
      </MenuFileHolder>
    </div>
  );
};
export default AddFileHolder;

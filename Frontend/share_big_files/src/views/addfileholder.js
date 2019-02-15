import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import AddFile from "./addfile";
import SharedHolder from "./sharedholder";
import styled from "styled-components";

const MenuFileHolder = styled.div`
  display: flex;

`;

const AddFileHolder = () => {
  return (
    <div>
      <NavHeader />
      <MenuFileHolder>
        <LeftMenu />
        <SharedHolder/>
        <AddFile />
      </MenuFileHolder>
    </div>
  );
};
export default AddFileHolder;

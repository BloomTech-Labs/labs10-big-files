import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import AddFile from "./addfile";
import styled from "styled-components";

const MenuFileHolder = styled.div`

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
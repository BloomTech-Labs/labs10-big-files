import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const LeftMenuHolder = styled.div`
  width: 10%;
  height: 40rem;
  border: 2px solid;
  margin-left: 2%;
  display: flex;
  background-color: #3CDBD3;
`;
const LeftMenuOptions = styled.div`
  margin-left: 4%;
  line-height: 0.5;
`;
const LinkStyles = styled.h1`
  color: black;
  font-size: 20px;
`;

const LeftMenu = () => {
  return (
    <LeftMenuHolder>
      <LeftMenuOptions>
        <Link to="/files"><LinkStyles>Files</LinkStyles></Link>
        <br />
        <Link to="/billing"><LinkStyles>Billing</LinkStyles></Link>
        <br />
        <Link to="/settings"><LinkStyles>Settings</LinkStyles></Link>
      </LeftMenuOptions>
    </LeftMenuHolder>
  );

};

export default LeftMenu;

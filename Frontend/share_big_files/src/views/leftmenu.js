import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const LeftMenuHolder = styled.div`
  width: 10%;
  height: 54rem;
  border: 2px solid;
  margin-left: 2%;
  display: flex;
  background-color: #42cbf4;
`;
const LeftMenuOptions = styled.div`
  margin-left: 4%;
  line-height: 2;
  font-size: 15px;
  color: black;
  text-decoration: none;
  

`;

const LeftMenu = () => {
  return (
    <LeftMenuHolder>
      <LeftMenuOptions>
        <Link to="/files">Files</Link>
        <br />
        <Link to="/billing">Billing</Link>
        <br />
        <Link to="/settings">Settings</Link>
      </LeftMenuOptions>
    </LeftMenuHolder>
  );

};

export default LeftMenu;

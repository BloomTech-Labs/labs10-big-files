import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftMenuHolder = styled.div`
  width: 10%;
  min-width: 125px;
  height: 22rem;
  border: 1px solid;
  margin-left: 2%;
  border-radius: 10%;
  display: flex;
  align-items: center;
  background-color: white;
  @media (max-width: 390px) { 
    display: none;
  }
`;

const SmallDiv = styled.div`
display: none;
@media(max-width: 390px){ 
  display: block;
  height: auto;
  width: 100%; 
}
`;
const LeftMenuOptions = styled.div`
  margin: 0 auto;
  line-height: 0.5;
  @media (max-width: 390px) {
    display: column;
  }
`;
const LinkStyles = styled.h1`
  color: #41d0f4;
  font-size: 2rem;
  @media (max-width: 390px) {
    font-size: 3rem; 
    margin: 0;
    margin-bottom: 1%;
    // border:1px solid black;
    text-align: center;
    background-color: white;
  }
`;

const LeftMenu = () => {
  return (
    <div>
    <LeftMenuHolder>
      <LeftMenuOptions>
        <Link to="/add">
          <LinkStyles>Files</LinkStyles>
        </Link>

        <br />

        <Link to="/billing">
          <LinkStyles>Billing</LinkStyles>
        </Link>

        <br />

        <Link to="/settings">
          <LinkStyles>Settings</LinkStyles>
        </Link>
      </LeftMenuOptions>
    </LeftMenuHolder>
    <SmallDiv>
        <Link to="/add">
          <LinkStyles>Files</LinkStyles>
        </Link>
 

        <Link to="/billing">
          <LinkStyles>Billing</LinkStyles>
        </Link>

         

        <Link to="/settings">
          <LinkStyles>Settings</LinkStyles>
        </Link>

    </SmallDiv>

    </div>
  );
};

export default LeftMenu;

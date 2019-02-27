import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SmallDiv = styled.div`
  display: none;
  @media (max-width: 390px) {
    display: block;
    height: auto;
    width: 100%;
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
  );
};

export default LeftMenu;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import SignOut from "../components/signOut";

const SmallDiv = styled.div`
  display: none;
  @media (max-width: 390px) {
    display: block;
    height: auto;
    width: 100%;
  }
`;

const Box = styled.div`
width: 100%;
background: linear-gradient(
  #36454f, #ff7518 50%, #36454f 50%, #36454f
);
background-size: 100% 202%;
transition: all 0.2s ease;
animation: down-bump 0.4s ease;
&:hover {
  background-position: 100% 100%;
  animation: up-bump 0.4s ease;
}
`;

const LinkStyles = styled.h1`
  color:  #fffff0;
  font-size: 2rem;
  &:hover {
    color: #ff7518;
  }
  @media (max-width: 390px) {
    font-size: 3rem;
    margin: 0;
    margin-bottom: 1%;
    // border:1px solid black;
    text-align: center;
    // background-color: white;
  }
`;



const LeftMenu = () => {
  return (
    <SmallDiv>
    <Box>
      <Link to="/add">
        <LinkStyles>Home</LinkStyles>
      </Link>
    </Box>
    <Box>
      <Link to="/billing">
        <LinkStyles>Account</LinkStyles>
      </Link>
    </Box>
    {/* <Box>
      <Link to="/" 
        onClick={this.signOutHandler}>
        <LinkStyles>Log Out</LinkStyles>
      </Link>
    </Box> */}
    </SmallDiv>
  );
};

export default LeftMenu;

import React from "react";
import styled from "styled-components";
// import SignOut from "../components/signOut.js";
import { Link } from "react-router-dom";

const NavHeaderDiv = styled.div`
  display: flex;
  // flex-direction: column;
  margin-bottom: 1%;
  border: 1px solid yellow @media (max-width: 390px) {
    border-bottom: none;
  }
`;


// const Box = styled.div`
// width: 100%;
// background: linear-gradient(
//   #36454f, #ff7518 50%, #36454f 50%, #36454f
// );
// background-size: 100% 202%;
// transition: all 0.2s ease;
// animation: down-bump 0.4s ease;
// &:hover {
//   background-position: 100% 100%;
//   animation: up-bump 0.5s ease;
// }

const TitleDiv = styled.div`
  height: auto;
  width: 83%;
  display: flex;
  align-items: center;
  @media (max-width: 390px) {
    margin-left: 23%;
  }
`;

const TitleH3 = styled.h3`
margin: 0;
    margin-left: 2%
    text-align: start;
    font-size: 3rem; 
    color: black;
    @media (max-width: 390px) {
      text-align: center;
      font-size: 3rem;
    }
`;
const NavMenuLink = styled(Link)`
  width: 100%;
  height: 100%;
  font-weight: 400;
`;

const NavMenuLink1 = styled(Link)`
  width: 100%;
  height: 100%;
  border-right: 1px solid black;
  font-weight: 400;
`;

const LinkStyles = styled.div`
  font-size: 2rem;  
  border-radius
  background-color: white;
  color:  black;
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MenuWrapper = styled.div`
  width: 13%;
  min-width: 175px;
  display: flex;
  margin: 10px 0;
  border-radius: 10px;
  background-color: white;
  @media (max-width: 390px) {
    display: none;
  }
`;

const MenuDiv = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  min-height: 40px;
  background-color: white;
  border-radius: 10px;
  @media (max-width: 390px) {
    
  }
`;

const NavHeader = props => {
  return (
    <NavHeaderDiv>
      <TitleDiv>
        <TitleH3>Share Big Files</TitleH3>
      </TitleDiv>
      <MenuWrapper>
        <MenuDiv>
          <NavMenuLink1 to="/add">
            <LinkStyles>Home</LinkStyles>
          </NavMenuLink1>
        </MenuDiv>
        <MenuDiv>
          <NavMenuLink to="/account">
            <LinkStyles>Account</LinkStyles>
          </NavMenuLink>
        </MenuDiv>
        {/* <MenuDiv>
          <NavMenuLink to="/billing">
            <LinkStyles>Got Plus?</LinkStyles>
          </NavMenuLink>
        </MenuDiv> */}
      </MenuWrapper>

    </NavHeaderDiv>
  );
};
export default NavHeader;

//going to have to use useEffect to get params for 2nd thing */

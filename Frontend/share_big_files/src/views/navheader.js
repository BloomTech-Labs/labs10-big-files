import React from "react";
import styled from "styled-components";
import SignOut from "../components/signOut.js";
import { Link } from "react-router-dom";


const NavHeaderDiv = styled.div`
display: flex;
flex-direction: column;
`;

const TitleH1 = styled.h1`
    text-align:center;
    width: 100%; 
`;
const LinkStyles = styled.div`
  font-size: 2rem;
`;


const PathSignoutDiv = styled.div`
display: flex;
width: 92%;
justify-content: space-between;
margin: 0 2%;
`;

const NavHeader = props => {
  return (
    <NavHeaderDiv>
        <TitleH1>Share Big Files</TitleH1>
         <PathSignoutDiv> 
      <Link to="/"><LinkStyles>Home</LinkStyles></Link> 
       
      <SignOut />
      </PathSignoutDiv>
    </NavHeaderDiv>
  );
};
export default NavHeader;

//going to have to use useEffect to get params for 2nd thing */


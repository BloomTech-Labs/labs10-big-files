import React from "react";
import styled from "styled-components";
import SignOut from "../components/signOut.js";
import { Link } from "react-router-dom";


const NavHeaderDiv = styled.div`
display: flex;
flex-direction: column;
border-bottom: 5px solid white;
margin-bottom: 1%;
@media(max-width: 390px){
  border-bottom: none;
}

`;

const TitleH1 = styled.h1`
    text-align:center;
    width: 100%; 
    color: white;
`;
const LinkStyles = styled.div`
  font-size: 2rem;
  margin-left: 75%;
  color: white;
`;


const PathSignoutDiv = styled.div`
display: flex;
width: 92%;
justify-content: space-between;
margin: 0 2%;
@media(max-width: 390px){
  display: none;
}
`;



const NavHeader = props => {
  return (
    <NavHeaderDiv>
        <TitleH1>Share Big Files</TitleH1>
         <PathSignoutDiv> 
      <Link to="/add"><LinkStyles>Home</LinkStyles></Link> 
      <Link to="/"><SignOut/></Link>
      
      </PathSignoutDiv>
    </NavHeaderDiv>
  );
};
export default NavHeader;

//going to have to use useEffect to get params for 2nd thing */


import React from "react";
import styled from "styled-components";
import SignOut from "../components/signOut.js";
import { Link } from "react-router-dom";


const NavHeaderDiv = styled.div`
display: flex;
// flex-direction: column;
border-bottom: 5px solid white;
margin-bottom: 1%;
@media(max-width: 390px){
  border-bottom: none;
}

`;

const Box = styled.div`
background: linear-gradient(
  white, white 50%, #333 50%, #333
);
background-size: 100% 202%;
transition: all 0.2s ease;
animation: down-bump 0.4s ease;
&:hover {
  background-position: 100% 100%;
  animation: up-bump 0.4s ease;
}

`;

const TitleH3 = styled.h3`
    margin-left: 2%
    text-align: start;
    width: 100%; 
    color: white;
    &:hover {
      color: #ff7518;
    }
`;
const LinkStyles = styled.div`
  font-size: 2rem;
  // margin-left: 75%;
  color: white;
  &:hover {
    color: #ff7518;
  }
`;


const PathSignoutDiv = styled.div`
display: flex;
width: 92%;
justify-content: space-around;
margin: 0 2%;
@media(max-width: 390px){
  display: none;
}
`;



const NavHeader = props => {
  return (
    <NavHeaderDiv>
        <TitleH3>Share Big Files</TitleH3>
         <PathSignoutDiv> 
         <Box><Link to="/add"><LinkStyles>Share</LinkStyles></Link></Box> 
         <Box><Link to="/create"><LinkStyles>Create</LinkStyles></Link></Box>
         <Box><Link to="/billing"><LinkStyles>Settings</LinkStyles></Link></Box>
         <Box><Link to="/"><SignOut><LinkStyles></LinkStyles></SignOut></Link></Box> 
         </PathSignoutDiv>
    </NavHeaderDiv>
  );
};
export default NavHeader;

//going to have to use useEffect to get params for 2nd thing */


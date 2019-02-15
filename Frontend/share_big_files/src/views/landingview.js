import React from "react";
import styled from "styled-components";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

const LandingContainerDiv = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80");
`;

const LandingCardsContainer = styled.div`
  width: 80%;
  height: 100%; 
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const LandingCards = styled.div`
width:30% ;
min-width: 330px;
height: auto; 
min-height: 365px;
background: rgba(255,255,255,0.5); 
margin: 0% 3% 0% 3%;
border-radius: 10px;
font-size: 2rem;
`;

const TextContainer = styled.div`
  height: auto;
  margin: 0 auto;
  padding: 2% 0;
  text-align: center;
`;

const UnorderedList = styled.ul`
  text-align: left;
  line-height: 2; 
`;

const ListItem = styled.li` 
`;

const FileTransferButton = styled.button`
  width: 90%;
  border-radius: 10px;
  height: 80px;
  font-size:1.9rem;
  background-color: lightgrey;
`;
const matches = useMediaQuery('(min-width:600px)');

export const LandingView = props => {
  return (
    
    <LandingContainerDiv>
      <span>{`(min-width:600px) matches: ${matches}`}</span>
      <TextContainer>
        <h1>Send Big Files</h1>
        <h2>Send your files quickly and easily</h2>
      </TextContainer>
      <LandingCardsContainer>
        <LandingCards>
          <h2>Big File Transfer Free</h2>

          <UnorderedList>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>See who viewed your file</ListItem>
            <ListItem>See who downloaded your file</ListItem>
            <ListItem>7 days of file storage</ListItem>
          </UnorderedList>
          <FileTransferButton>Use File Transfer Free</FileTransferButton>
        </LandingCards>
        <LandingCards>
          <h2>Big File Transfer Pro</h2>
          <UnorderedList>
            <li>Send files up to 4gb</li>
            <li>See who viewed your file</li>
            <li>See who downloaded your file</li>
            <li>90 days of file storage</li>
          </UnorderedList>
          <FileTransferButton>Use File Transfer Pro</FileTransferButton>
        </LandingCards>
      </LandingCardsContainer>
    </LandingContainerDiv>
  );
};

export default LandingView;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";   

const LandingContainerDiv = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  //background-image: url("http://get.addonreviews.com/cmsimages/lp/fileshare/cloudbackground.jpg");
  background-size: 100% 100%;
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
  width: 30%;
  min-width: 330px;
  height: auto;
  min-height: 365px;
  background: rgba(255, 255, 255, 0.5);
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

const ListItem = styled.li``;

const FileTransferButton = styled.button`
  width: 90%;
  border-radius: 10px;
  height: 80px;
  font-size: 1.9rem;
  background-color: lightgrey;
  cursor: pointer;
`; 

export const LandingView = props => { 
  return (
    <LandingContainerDiv>
      <TextContainer>
        <h1>Send Big Files</h1>
        <h2>Send your files quickly and easily</h2>
      </TextContainer>
      <LandingCardsContainer>
        <LandingCards> 
          <h2>Big File Transfer Basic</h2>
          <UnorderedList>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>See who viewed your file</ListItem>
            <ListItem>See who downloaded your file</ListItem>
            <ListItem>7 days of file storage</ListItem>
          </UnorderedList>
          <div  >
            <FileTransferButton onClick={props.lockOpen} >Use File Transfer Free</FileTransferButton>
          </div>
        </LandingCards>
        <LandingCards>
          <h2>Big File Transfer Pro</h2>
          <UnorderedList>
            <li>Send files up to 4gb</li>
            <li>See who viewed your file</li>
            <li>See who downloaded your file</li>
            <li>90 days of file storage</li>
          </UnorderedList>
          <div  >
            <FileTransferButton onClick={props.lockOpen}>Use File Transfer Pro</FileTransferButton>
          </div>
        </LandingCards>
      </LandingCardsContainer>
    </LandingContainerDiv>
  );
};

export default LandingView;

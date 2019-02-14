import React from "react";
import styled from "styled-components";

const LandingContainerDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80");
`;

const LandingCardsContainer = styled.div`
  width: 80%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const LandingCards = styled.div`
width:30% ;
min-width: 330px;
height: 100%;
border: 1px solid red;
min-height: 380px;
background-color: #D2B897; 
margin: 0% 3% 0% 3%;
border-radius: 10px;
font-size: 20px;
text-decoration: underline;
`;

const TextContainer = styled.div`
  margin: 0 auto;
  padding: 2% 0;
`;

const UnorderedList = styled.ul`
  text-align: left;
  line-height: 2;
  font-size: 19px;
`;

const FileTransferButton = styled.button`
  width: 90%;
  border-radius: 10px;
  height: 80px;
  font-size:19px;

`;

export const LandingView = props => {
  return (
    <LandingContainerDiv>
      <TextContainer>
        <h1>Send Big files</h1>
        <h2>Send your files quickly and easily</h2>
      </TextContainer>
      <LandingCardsContainer>
        <LandingCards>
          <h2>Big File Transfer Free</h2>

          <UnorderedList>
            <li>Send files up to 2gb</li>
            <li>See who viewed your file</li>
            <li>See who downloaded your file</li>
            <li>7 days of file storage</li>
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
          <FileTransferButton>Use File Transfer Free</FileTransferButton>
        </LandingCards>
      </LandingCardsContainer>
    </LandingContainerDiv>
  );
};

export default LandingView;

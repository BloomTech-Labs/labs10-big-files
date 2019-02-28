import React from "react";
import styled from "styled-components";

const LandingContainerDiv = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-image: url("https://images.unsplash.com/photo-1524122209929-5bc27bd9c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
`;

const LandingCardsContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  @media (max-width: 390px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const LandingCards = styled.div`
  width: 30%;
  min-width: 330px;
  height: auto;
  min-height: 365px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0% 0% 0% 8%;
  border-radius: 10px;
  font-size: 2rem;
  @media (max-width: 390px) {
   
    margin-top 10%; 
  }
`;

const TextContainer = styled.div`
  height: auto;
  margin: 0 auto;
  padding: 1% 0;
  text-align: center;
`;

const UnorderedList = styled.ul`
  text-align: left;
  line-height: 2;
  margin: 0;
`;

const ListItem = styled.li``;

const FileTransferButton = styled.button`
  width: 45%;
  border-radius: 10px;
  height: 60px;
  font-size: 1.9rem;
  background-color: lightgrey;
  cursor: pointer;
  margin-bottom: 20px;
`;

const LandingH3 = styled.h3`
  margin: 0;
  margin-left: -8%;
`;

const LandingH2 = styled.h2`
  margin: 0;
  margin-top: -6%;
`;

export const LandingView = props => {
  return (
    <LandingContainerDiv>
      <LandingCardsContainer>
        <LandingCards>
          <TextContainer>
            <h1>Send Big Files</h1>
            <LandingH2>Send files quickly and easily</LandingH2>
          </TextContainer>

          <UnorderedList>
            <LandingH3>Free tier:</LandingH3>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>See who viewed your file</ListItem>
            <ListItem>See who downloaded your file</ListItem>
            <ListItem>7 days of file storage</ListItem>
            <LandingH3>Pro tier:</LandingH3>
            <ListItem>70 days of file storage</ListItem>
          </UnorderedList>
          <div>
            <FileTransferButton onClick={props.lockOpen}>
              Click to start
            </FileTransferButton>
          </div>
        </LandingCards>
        {/* <LandingCards>
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
        </LandingCards> */}
      </LandingCardsContainer>
    </LandingContainerDiv>
  );
};

export default LandingView;

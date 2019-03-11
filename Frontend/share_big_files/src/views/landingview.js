import React from "react";
import NavHeader from "./navheader.js";
import styled from "styled-components";
import img from "../../src/assets/movebyteslogo.png";
import awsimg from "../../src/assets/1_tFl-8wQUENETYLjX5mYWuA.png";
import stpimg from "../../src/assets/payment-logo_1.png";
import s3img from "../../src/assets/s3.webp";
import steel from "../../src/assets/brushsteel2.jpg";
import { FaCcStripe } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
//NEW STUFF
import "./CTAButton.css";

const LandingContainerDiv = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 500px; 
  margin: 0 auto;
  background: url(${steel});
  background-size: cover;
`;

const LandingCardsContainer = styled.div`
  width: 100%;
  // height: 100vh;
  // margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 83%;

  @media (max-width: 390px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const LandingCards = styled.div`
  // width: 30%;
  // min-width: 330px;
  // height: auto;
  // min-height: 365px;
  // background: rgba(255, 255, 255, 0.5);
  // margin: 0% 0% 0% 8%;
  
  font-size: 2rem;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 459px;
  width: 34rem;
  margin: 0 auto;
  box-shadow: 5px 10px #888888;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 390px) {
   
    margin-top 10%; 

  }
`;

const TextContainer = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 0.5% 0;
  text-align: center;
  border-bottom: 1px solid black;
`;

const UnorderedList = styled.ul`
  width: 90%;
  border-bottom: 1px solid black;
  text-align: left;
  line-height: 2;
  margin: 0;
  padding-left: 10%;
  padding-bottom: 4%;
`;

const ListItem = styled.li`
  font-size: 1.75rem;
`;

const FileTransferButton = styled.button`
  width: 45%;
  border-radius: 10px;
  height: 60px;
  font-size: 1.9rem;
  background-color: #206db5;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 6%;
  text-align: center;
`;

const LandingH3 = styled.h3`
  margin: 0;
  margin-left: -8%;
`;

const LandingH2 = styled.h2`
  margin: 0;
  margin-bottom: 1%;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 28%;
  @media(max-width:653px){
    width: 100%;
  }
`;
const ImageDiv = styled.div`
with: 90%
display: flex;
justify-content: space-around;
margin-top: 1.5%;
margin: 0 auto;
margin-top: 4%
height: fit-content;
@media(max-width: 653px) {
  flex-direction: column;
}
`;
const FreeTierDiv = styled.div`
width: 100% 
`; 
const Services = styled.div`
width: 100% 
`;
 
const LineHeightH4 = styled.h4`
  line-height: 1.5;
`;

//NEW STUFF
const CTA = styled.div`
  cursor: pointer;
  display: flex;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
`;
const hiddenStyle = {
  opacity: "1",
  position: "absolute",
  // top: "0",
  // left: "0",
  // bottom: "0",
  // right:"0",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  borderMargin: 0,
  cursor: "pointer",
  zIndex: 1
};

const emailStyle = {
  marginTop: ".83em",
  marginRight: "5px"
};

export const LandingView = props => {
  return (
    <LandingContainerDiv>
      {/* <TitleDiv>
        <TitleH3><HeaderIMG src={img} alt="mblogo" /></TitleH3>
      </TitleDiv> */}
      <NavHeader />
      <LandingCardsContainer>
        <CTA className="play-btn">
          <div onClick={props.lockOpen} style={hiddenStyle} />
        </CTA>

        {/* <LandingCards>

          
          <TextContainer>
            <TitleH1>Send Big Files</TitleH1>
            <LandingH2>Send files quickly and easily</LandingH2>
          </TextContainer>

          <UnorderedList>
            <LandingH3>Free tier:</LandingH3>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>File view history</ListItem>
            <ListItem>File download history</ListItem>
            <ListItem>7 days of file storage</ListItem>
            <LandingH3>Pro tier:</LandingH3>
            <ListItem>70 days of file storage</ListItem>
          </UnorderedList>
          <>
            <FileTransferButton onClick={props.lockOpen}>
              Click to start
            </FileTransferButton>
          </>
          
        </LandingCards> */}
      </LandingCardsContainer>
      <ImageDiv>
        <FlexDiv>
          <MdEmail size={40} color="#206DB5" style={emailStyle} />
          <FreeTierDiv>
            <h2>Email Large Files</h2>
            <LineHeightH4>
              Send files up to 2gb to recipients. Ensure they received them with
              email confirmation, and check if they've downloaded with view and
              download tracking.{" "}
            </LineHeightH4>
          </FreeTierDiv>
        </FlexDiv>
        {/* <AwsImg src={awsimg} alt="awslogo"/> */}

 
        <FlexDiv>
          <FaUserPlus size={40} color="#206DB5" style={emailStyle} />
          <br />
          <Services>
            <h2>Unlock Pro Tier!</h2>
            <LineHeightH4>
            For longer download and view history upgrade to Pro Tier Service.
              Gain access to 70 day file storage and history reporting!
            </LineHeightH4>
          </Services>
        </FlexDiv>
        
        <FlexDiv>
          <FaUserLock size={40} color="#206DB5" style={emailStyle} />
          <br />
          <Services>
            <h2>Send With Confidence</h2>
            <LineHeightH4>
              Our service partners with industry leaders such as Amazon Web
              Services, Auth0, SendGrid, and Stripe to keep your files and info
              safe.
            </LineHeightH4>
          </Services>
        </FlexDiv>
      </ImageDiv>
    </LandingContainerDiv>
  );
};

export default LandingView;

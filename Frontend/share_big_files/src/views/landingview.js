import React from "react";
import NavHeader from "./navheader.js";
import styled from "styled-components";
import steel from "../../src/assets/brushsteel2.jpg";
import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";
//NEW STUFF
import "./CTAButton.css";

const LandingContainerDiv = styled.div`
  width: 100%;
  height: 73vh;
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
 
const FlexDiv = styled.div`
  display: flex;
  width: 28%;
  @media(max-width:1000px){
    width: 100%;
  }
`;
const ImageDiv = styled.div`
with: 90%
display: flex;
justify-content: space-around;
margin-top: 1.5%;
margin: 0 auto;
margin-top: 7%
height: fit-content;
@media(max-width: 1000px) {
  flex-direction: column;
  margin-top: 10%;
}

@media(max-width: 653px) {
  flex-direction: column;
  margin-top: 15%;
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

import React from 'react';
import styled, { keyframes } from 'styled-components';

import Features from './Features';

import Blue from "./Blue.jpg"
import Beach from "./Beach.jpg"
import Water from "./Water.jpg"
import Pine from "./Pine.jpg"
import Gray from "./Gray.jpg"
import Grapes from "./Grapes.jpg"

import './CTAButton.css'

var myArray = [
  Blue,
  Beach,
  Water,
  Pine,
  Gray,
  Grapes
];

let randomImage = myArray[Math.floor(Math.random()*myArray.length)];

const Splash = () => {

  const imageStyle = {
    backgroundImage: `url(${randomImage})`,
    top: "0",
    left: "0",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    overflow: "hidden",
    // position: "absolute",
    // objectFit: "none",
    // backgroundSize: "100%",
    // backgroundPosition: "center center",
    // display: "grid",
  };
  

  return (
    <WrapperContainer style={ imageStyle }>
    {console.log("RandImage", randomImage)}
      <Header>
        <JumboTron>
          <LeftColumn>
            <br/><br/>
            <h1>MoveBytes</h1>
            <h1>Send files quick and easy.</h1>
            <br/><br/><br/><br/><br/><br/>
            <CTA className="play-btn" href="/login"> </CTA>

          </LeftColumn>
          <RightColumn>
            <h1>1 Select a file</h1>
            <h1>2 Enter email</h1>
            <h1>3 Send!</h1>
            <CTAButtonsGroup>
              <a href="#features">
                <CTABtn learn href="#features">Learn more</CTABtn>
              </a>
            </CTAButtonsGroup>

          </RightColumn>
        </JumboTron>
      </Header>

      <Body>
        <Features />
        <BackToTopContainer>
          <a href="/#">Back to top</a>
        </BackToTopContainer>
      </Body>
    </WrapperContainer>
  );
};

export default Splash

// styles


const WrapperContainer = styled.div`
height: 100%;

@media (max-width: 540px) {
  h1 {
    font-size: 28px;
  }
}
`;

const Header = styled.div`
    height: 100vh;
`;

const JumboTron = styled.div`
  display: flex;
  // padding: 7% 3%;
  // height: 55vh;
  letter-spacing: 1px;
  color: white;
  // flex-direction: row;
  // justify-content: space-between;

  // &::before {
  //   background-size: cover;
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   // height: 65vh;
  //   z-index: -2;
  //   opacity: 0.2;
  //   }

    // div {
    //   max-width: 700px;
    //   width: 100%;
    // }

    // h1 {
    //   font-size: 38px;
    // }

    // p {
    //   margin-top: 30px;
    //   line-height: 25px;
    // }
`;

const LeftColumn = styled.div`
  width: 38%;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  const CTA = styled.a`
  display: flex;


`
const RightColumn = styled.div`
  width: 60%;
  left: 40%
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Body = styled.div`
  position: relative;
  flex:1;
  height: 100%;
  overflow:hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling:touch;
`;

const CTAButtonsGroup = styled.div`
text-align: center;
margin: 0 auto;

button {
  // width: 200px;
  
}
`;

const CTABtn = styled.button`
position: absolute;
top: 95%;
left: 50%;
font-size: 18px;
height: 40px;
&:hover {color: white}
&:hover {background: black}
&:hover {border: black}
margin-right: ${props => props.learn ? 0 : '20px'};
color: ${props => props.learn ? null : 'black'};
border-color: ${props => props.learn ? null : 'black'};
background: ${props => props.learn ? null : 'none'};

width: 200px;

@media (max-width: 540px) {
  width: 115px;
}
`;

const BackToTopContainer = styled.div`
position: absolute;
top: 95%;
right: 5%;
`;

const animate = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
  `;


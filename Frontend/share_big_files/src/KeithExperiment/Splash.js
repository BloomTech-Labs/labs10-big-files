import React from 'react';
import styled, { keyframes } from 'styled-components';
// import WhyPeople from './WhyPeople';
// import Features from './Features';
// import Pricing from './Pricing';

import Blue from "./Blue.jpg"
import Beach from "./Beach.jpg"

import './CTAButton.css'

const Splash = () => {

  const imageStyle = {
    backgroundImage: `url(${Blue})`,
    // position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "1300px",
    objectFit: "none",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    // backgroundAttachment: "fixed",
    // display: "grid",
    // height: "2000px",
    // maxWidth: "100%",
    // overflow: "hidden",
    // position: "relative",
  };
  

  return (
    <WrapperContainer style={ imageStyle }>
      <Header>
        <JumboTron>
          <LeftColumn>
            <h1>Send files quick and easy.</h1>
            <h1>Blah blah blah blah blah blah</h1>
            <a className="play-btn" href="/login"> </a>

          </LeftColumn>
          <RightColumn>
            <h1>1 Drag-and-drop or click to select a file</h1>
            <h1>2 Enter email addresses</h1>
            <h1>3 Send!orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsuorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsuorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu  </h1>

          </RightColumn>
          {/* <CTAButtonsGroup>
            <CTABtn onClick={login}>Sign up</CTABtn>
            <a href="#why">
              <CTABtn learn href="#why">Learn more</CTABtn>
            </a>
          </CTAButtonsGroup> */}
        </JumboTron>
        <ArrowContainer>
          <div>
            <a href="#why">
              <Arrow />
            </a>
          </div>
        </ArrowContainer>
      </Header>
      <Body>
        {/* <WhyPeople /> */}
        {/* <Features /> */}
        {/* <Pricing /> */}
        <BackToTopContainer>
          <a href="/#">Back to top</a>
          <div> HELLO. THIS IS THE BOTTOM</div>
        </BackToTopContainer>
      </Body>
    </WrapperContainer>
  );
};

export default Splash

// styles


const WrapperContainer = styled.div`
// height: 100%;
@media (max-width: 540px) {
  h1 {
    font-size: 28px;
  }
}
`;

const Header = styled.div`
height: 100%;
`;

const JumboTron = styled.div`
  display: flex;
  // padding: 5% 10%;
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
  width: 40%;
  position: fixed;
`
const RightColumn = styled.div`
  width: 60%;
  left: 40%
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

// const CTAButtonsGroup = styled.div`
// text-align: center;
// margin: 0 auto;

// button {
//   // width: 200px;
  
// }
// `;

// const CTABtn = styled.button`
// font-size: 18px;
// height: 40px;
// &:hover {color: white}
// &:hover {background: black}
// &:hover {border: black}
// margin-right: ${props => props.learn ? 0 : '20px'};
// color: ${props => props.learn ? null : 'black'};
// border-color: ${props => props.learn ? null : 'black'};
// background: ${props => props.learn ? null : 'none'};

// width: 200px;

// @media (max-width: 540px) {
//   width: 115px;
// }
// `;

const ArrowContainer = styled.div`
position: absolute;
top: 95%;
left: 50%;
transform: translate(-50%, -50%);
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

const Arrow = styled.span`
display: block;
color: #F7F8FA;
width: 35px;
height: 35px;
border-bottom: 3px solid;
border-right: 3px solid;
transform: rotate(45deg);
animation: ${animate} 2s infinite;
`;

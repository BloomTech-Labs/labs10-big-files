import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Features from './Features';
import Pricing from './Pricing';

import FormModal from "./FormModal"

import Blue from "./Blue.jpg"
import Beach from "./Beach.jpg"
import Water from "./Water.jpg"


import './CTAButton.css'

var myArray = [
  Blue,
  Beach,
  Water
];
let randomImage = myArray[Math.floor(Math.random()*myArray.length)];


const Splash = ({ toggleTheme }) => {
const [file, setFile] = useState(null)


  const imageStyle = {
    // backgroundImage: `url(${randomImage})`,
    backgroundImage: "var(--backgroundImage)",
    top: "0",
    left: "0",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    overflow: "hidden",
  };

  const hiddenStyle = {
    opacity: "0.0",
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    right:"0",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    borderMargin: 0,
    cursor: "pointer",
    zIndex: 1
  }

  function handleFileUpload(event) {
    setFile(event.target.files);
  }
  
  return (
    <WrapperContainer style={ imageStyle }>
      <Header>
        <JumboTron>
          {file ? <FormModal file={file} setFile={setFile} /> : null}
          <LeftColumn>
            <br/><br/>
            <h1>MoveBytes</h1>
            <h1>Send files quick and easy.</h1>
            <br/><br/><br/><br/><br/><br/>
            <CTA className="play-btn" > 
              <input type="file" onChange={handleFileUpload} style={hiddenStyle} /> 
            </CTA>

       
            {/* <CTA className="play-btn" onSubmit={submitFile}> 
              <input type="file" onChange={handleFileUpload} /> 
              <button type="submit">Send</button>
            </CTA> */}
          </LeftColumn>

          <RightColumn>
            <h1>1 Select a file</h1>
            <button className="header__button" onClick={e => toggleTheme()}>
              Toggle theme
            </button>
          <div>
              {/* <form onSubmit={submitFile}>
                <input label='upload file' type='file' onChange={handleFileUpload} />
                <button type='submit'>Send</button>
                </form>
              <div> {Math.round(loaded, 2) } %</div> */}
          </div>
            <h1>2 Enter email</h1>
            <h1>3 Send!</h1>

      


            <CTAButtonsGroup>
              {/* <a href="#features">
                <CTABtn learn href="#features">Learn more</CTABtn>
              </a> */}
            </CTAButtonsGroup>
          </RightColumn>

        </JumboTron>
      </Header>

      <Body>
        <Features />
        <Pricing />
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
  width: 35%;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
  const CTA = styled.form`
  cursor: pointer;
  display: flex;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;

`
const RightColumn = styled.div`
  width: 63%;
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


import React from "react";
import NavHeader from "./navheader.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../src/assets/movebyteslogo.png";
import awsimg from "../../src/assets/1_tFl-8wQUENETYLjX5mYWuA.png";
import stpimg from "../../src/assets/payment-logo_1.png";

import steel from "../../src/assets/brushsteel2.jpg";
import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserLock } from "react-icons/fa";

import "./pricingtable.css";

//NEW STUFF
import "./CTAButton.css";
//match return button size, match signout button size
//add modal uploaded info
//fix blue button to outline, with blue styling
const LandingContainerDiv = styled.div`
  width: 100%;
  height: 73vh;
  min-height: 500px;
  margin: 0 auto;
`;
const HeaderDiv = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 390px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
  }
`;
const HeaderIMG = styled.img`
  height: 100%;
  margin-left: 5%;
  max-height: 60px;
  max-width: 260px;
  // margin: 0 auto;
  @media (max-width: 768px) {
    min-width: 35%;
  }
  @media (max-width: 390px) {
    width: 80%;
    margin: 0 auto;
  }
`;

// const TitleH3 = styled.h3`
// margin: 0;
//     margin-left: 2%
//     text-align: start;
//     font-size: 3rem;
//     color: black;
//     @media (max-width: 390px) {
//       margin: 0 auto;
//       text-align: center;
//       font-size: 3rem;
//     }
// `;

const LandingCardsContainer = styled.div`
  width: 100%;
  // height: 100vh;
  // margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(${steel});
  background-size: cover;
  height: 78%;
  @media (max-width: 390px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  width: 28%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

// const TextContainer = styled.div`
//   height: auto;
//   width: 100%;
//   margin: 0 auto;
//   padding: .5% 0;
//   text-align: center;
//   border-bottom: 1px solid black;
// `;

// const UnorderedList = styled.ul`
// width: 90%;
// border-bottom: 1px solid black;
//   text-align: left;
//   line-height: 2;
//   margin: 0;
//   padding-left: 10%;
//   padding-bottom: 4%;
// `;

// const ListItem = styled.li`
// font-size: 1.75rem`;

// const FileTransferButton = styled.button`
//   width: 45%;
//   border-radius: 10px;
//   height: 60px;
//   font-size: 1.9rem;
//   background-color: #206DB5;
//   cursor: pointer;
//   margin: 0 auto;
//   margin-top: 6%;
//   text-align: center;
// `;

// const LandingH3 = styled.h3`
//   margin: 0;
//   margin-left: -8%;
// `;

// const LandingH2 = styled.h2`
//   margin: 0;
//   margin-bottom: 1%;
// `;

// const TitleH1 = styled.h1`
// margin-bottom: 0;
// `;
// const InfoDiv = styled.div`
// display: flex;
// justify-content: space-around;
// margin-top: 1.5%;
// height: 10%;
// // @media(max-width: 795px) {
// //   margin-top: 2.6%;
// // }

// `;
// const FreeTier = styled.div`
// margin-top: inherit;
// font-size: 1.7rem;
// font-weight: bold;
// @media(max-width: 1000px) {
//   font-size: 1.4rem;
//   margin-top: auto;
// }
// @media(max-width: 860px) {
//   font-size: 1.3rem;
// }
// @media(max-width: 770px) {
//   font-size: 1.2rem;
// }
// `;
// const ProTier = styled.div`
// margin-top: inherit;
// font-size: 1.8rem;
// font-weight: bold;
// @media(max-width: 1000px) {
//   font-size: 1.4rem;
//   margin-top: auto;
// }
// `;
// const Services = styled.div`
// margin-top: inherit;
// font-size: 1.8rem;
// font-weight: bold;
// @media(max-width: 1000px) {
//   font-size: 1.4rem;
//   margin-top: auto;
// }
// `;
// const AwsImg = styled.img`
// margin-top: inherit;
// width: 15%;
// height: 75px;
// @media(max-width: 860px) {
//   width;
// }
// `;
// const StripeImg = styled.img`
// margin-top: inherit;
// width: 12%;
// height: 80px;
// `;
// const S3Img = styled.img`
// width: 130px;
// height: 90px;
// `;
const ImageDiv = styled.div`
width: 90%

display: flex;
justify-content: space-around;
margin: 0 auto;
height: fit-content;
@media(max-width: 1000px) {
  flex-direction: column;
  
}

@media(max-width: 653px) {
  flex-direction: column;
  
}
`;
const FreeTierDiv = styled.div`
  width: 100%;
`;
const Services = styled.div`
  width: 100%;
`;

const LineHeightH4 = styled.h4`
  line-height: 1.5;
`;

const LoginContainer = styled.div`
  width: 10%;
  min-width: 175px;
  display: flex;
  margin: 10px 5% 10px 0;
  border-radius: 10px;
  background-color: #206db5;
  @media (max-width: 460px) {
    display: none;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  min-height: 40px;
  background-color: #206db5;
  border-radius: 10px;
  @media (max-width: 390px) {
  }
`;

const MenuDiv = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 400;
`;

const LinkStyles = styled.div`
  font-size: 2rem;  
  border-radius
  background-color: white;
  color:  white;
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
    align-items: center;
    justify-content: center;
  }
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

// Free/paid Section
const priceTableWrapper = styled.div`
  font-family: "Lato", sans-serif;
  text-align: center;
  margin-top: 30px;
`;

export const LandingView = props => {
  return (
    <LandingContainerDiv>
      <HeaderDiv>
        <HeaderIMG src={img} alt="mblogo" />
        <LoginContainer>
          <LoginDiv>
            <MenuDiv onClick={props.lockOpen}>
              <LinkStyles>Log In</LinkStyles>
            </MenuDiv>
          </LoginDiv>
        </LoginContainer>
      </HeaderDiv>
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

      <ImageDiv>
        <div class="price-table-wrapper">
          <div class="pricing-table">
            <h2 class="pricing-table__header">- BASIC -</h2>
            <h3 class="pricing-table__price">Free</h3>
            <a
              target="_blank"
              class="pricing-table__button"
              href="http://www.google.com"
            >
              Join Now!
            </a>
            <ul class="pricing-table__list">
              <li>Files up to 2 gigabytes</li>
              <li>50gb storage space</li>
              <li>Host files for up to 7 days</li>
              <li>24 hour support</li>
            </ul>
          </div>
          <div class="pricing-table featured-table">
            <h2 class="pricing-table__header">- PREMIUM -</h2>
            <h3 class="pricing-table__price">$9.99</h3>
            <a
              target="_blank"
              class="pricing-table__button"
              href="http://www.google.com"
            >
              Join Now!
            </a>
            <ul class="pricing-table__list">
              <li>Files up to 4 gigabytes</li>
              <li>100gb storage space</li>
              <li>Host files for up to 1 month</li>
              <li>24 hour support</li>
            </ul>
          </div>
        </div>
      </ImageDiv>
      <div id="cubeContainer">
        <div id="cubeWrapper">
          <div class="head">
            <h1>MEET THE TEAM</h1>
          </div>
          <div id="cubes">
            <div class="cube p2">
              <div class="name">
                <h1>Anthony</h1>
                <p>Kentucky</p>
              </div>
              <div class="innerBorder" />
              <div class="darken" />
              <div class="content" />
            </div>
            <div class="cube p1">
              <div class="name">
                <h1>Tom</h1>
                <p>South Carolina</p>
              </div>
              <div class="innerBorder" />
              <div class="darken" />
              <div class="content" />
            </div>
            <div class="cube p3">
              <div class="name">
                <h1>James Cassidy</h1>
                <p>New York</p>
              </div>
              <div class="innerBorder" />
              <div class="darken" />
              <div class="content" />
            </div>
            <div class="cube p4">
              <div class="name">
                <h1>Keith H</h1>
                <p>California</p>
              </div>
              <div class="innerBorder" />
              <div class="darken" />
              <div class="content" />
            </div>
            <div class="cube p5">
              <div class="name">
                <h1>Akshay</h1>
                <p>California</p>
              </div>
              <div class="innerBorder" />
              <div class="darken" />
              <div class="content" />
            </div>
          </div>
          <div class="moreTeam">
            <a href="https://lambdaschool.com/">
              <span>Trained by Lambda</span>
              <span class="fas fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </LandingContainerDiv>
  );
};

export default LandingView;

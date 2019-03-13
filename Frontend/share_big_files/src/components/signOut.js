import React from "react";
import styled from "styled-components";
import history from "../history";
import { FaSignOutAlt } from "react-icons/fa";


function signOutHandler(){
console.log('Sign out handler fired')
localStorage.clear('accessToken');
localStorage.clear('expiresAt');
history.push("/");
window.location.reload();

}


// const SignOutButton = styled.div`
// font-size: 2rem;
// position: absolute;
// top: 10%;
// right: 7%;
// color: black;
// cursor: pointer;
// border-radius: 10px;
// width: 9rem;
// text-align: center;
// background-color: white;
// @media (max-width: 1000px) {
//   right: 4%;
// }
// @media (max-width: 768px) {
//   right: 5%;
// }
// @media (max-width: 580px) {
//   right: 7%;
// }
// @media (max-width: 390px) {
//   display: none;
// }
// // &:hover {
// //   color: #ff7518;
// // }
//`;


const SignOutDiv = styled.div`
  width: 45%
  min-width: 180px;
  margin: 3% auto;
  background-color: #206db5;
  height: auto; 
  border-radius: 10px
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const SignOutH2 = styled.h2`
  color: white;
  font-size: 2rem;
  font-style: Raleway
  font-weight: bold;
  margin: 0;
  height: 38px;
  margin-left: 5.5%;
  padding-left: 2.5%;
  padding-top: 6%;
  border-left: 1px solid white;
  width: fit-content;
  @media(max-width: 768px) {
    padding-top: 4%;
  }
`;


const SignOut = props => {
  return <SignOutDiv onClick={signOutHandler}>
            <FaSignOutAlt size={30} color="#ffffff" />
            <SignOutH2>Sign Out</SignOutH2>
         </SignOutDiv>;
};

export default SignOut;

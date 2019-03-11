import React from "react";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu";
import Billing from "./billing";
import styled from "styled-components";
import CreateFileForm from "./createfileform";


const AccountPage = styled.div`
// (props => <div {...props} />)
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #eae7dc;
  // background-image: url("https://images.unsplash.com/photo-1524122209929-5bc27bd9c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  @media(max-width: 390px) {
    width: 100%;
  }
`;


const MenuAccountDiv = styled.div`
  display: flex;
  @media(max-width: 390px) {
    width: 100%;
    flex-direction: column;
  }
`;

const CreatePage = styled.div`
padding-top: 90px;
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  // background-image: url("https://images.unsplash.com/photo-1524122209929-5bc27bd9c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
 
  background-color: lightgray;
  background-size: cover;
 
  @media(max-width: 460px){
    padding-top: 180px;
  }
`;
const CreateEditDiv = styled.div`
width: 100%;
display: flex;
  margin-top: 5px;
  @media (max-width: 900px) {
    display: block;
    @media(max-width: 390px){
      width: 100%
    }
  }
`;

const FixedDiv = styled.div`
position:fixed;
top:0;
width: 100%;
height:auto;
 
background-color: lightgray;
margin-bottom: 15px;
 
`;

const AccountHolder = () => {
  return (
 <>
 <FixedDiv>
 <NavHeader />
 <LeftMenu/>
 </FixedDiv>
 <CreatePage>
 
   <CreateEditDiv>
     <CreateFileForm />
     <Billing />
   </CreateEditDiv>
 </CreatePage>
 </>

  );
};
export default AccountHolder;



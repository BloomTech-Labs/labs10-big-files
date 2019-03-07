import React from "react";
// import NavHeader from "./navheader";
import FileDisplay from "./FileDisplay";
import CreateFileForm from "./createfileform";
import styled from "styled-components";
import NavHeader from "./navheader";
import LeftMenu from "./leftmenu"

const CreatePage = styled.div`
padding-top: 165px
  width: 100%;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  // background-image: url("https://images.unsplash.com/photo-1524122209929-5bc27bd9c250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  background-color: #eae7dc;
  background-size: 100% 100%;
`;
const CreateEditDiv = styled.div`

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
background-color: #eae7dc;
`;
const HomeView = () => {
  return (
    <>
    <FixedDiv>
    <NavHeader />
    <LeftMenu/>
    </FixedDiv>
    <CreatePage>
    
      <CreateEditDiv>
        <CreateFileForm />
        <FileDisplay />
      </CreateEditDiv>
    </CreatePage>
    </>
  );
};

export default HomeView;

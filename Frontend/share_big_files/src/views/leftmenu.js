import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LeftMenuHolder = styled.div`
  width: 10%;
  height: 22rem;
  border: 1px solid;
  margin-left: 2%;
  border-radius: 10%;
  display: flex;
  align-items: center;
  background-color: white;
  @media (max-width: 375px) {
    width: 100%;
    margin: 0 auto;
    height: 40rem;
    display: none;
  }
`;
const LeftMenuOptions = styled.div`
  margin: 0 auto;
  line-height: 0.5;
  @media (max-width: 375px) {
    display: column;
  }
`;
const LinkStyles = styled.h1`
  color: #41d0f4;
  font-size: 2rem;
  @media (max-width: 390px) {
    font-size: 3rem;
    margin: 45% 0 45% 0;
    margin-bottom: 2%;
  }
`;

const LeftMenu = () => {
  return (
    <LeftMenuHolder>
      <LeftMenuOptions>
        <div> 
          <Link to="/add">
            <LinkStyles>Files</LinkStyles>
          </Link>
        </div>

        <br />
        <div>
          <Link to="/billing">
            <LinkStyles>Billing</LinkStyles>
          </Link>
        </div>

        <br />
        <div>
          <Link to="/settings">
            <LinkStyles>Settings</LinkStyles>
          </Link>
        </div>
      </LeftMenuOptions>
    </LeftMenuHolder>
  );
};

export default LeftMenu;

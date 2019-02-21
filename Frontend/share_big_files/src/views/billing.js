import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Stripe from "../components/StripeFE";

const BillingDiv = styled.div`
  margin-left: 2%;
`;

const BasicMembershipDiv = styled.div`
  height: auto;
  width: auto;
  min-width: 44rem;
  margin-left: 2%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
`;

const ProMembershipDiv = styled.div`
  height: auto;
  width: auto;
  min-width: 37rem;
  margin-left: 2%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
`;

const TextDiv = styled.div`
  width: fit-content;
  padding: 0 5%;
`;

const UnorderedList = styled.ul`
  text-align: left;
  line-height: 2;
`;

const ListItem = styled.li``;

const PaymentInfoHolder = styled.div``;
const Subscriptions = styled.div`
  color: black;
`;
const BuyNowButton = styled.div`
  border: 2px solid;
  cursor: pointer;
  text-align: center;
  border-radius: 5%;
  box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
`;
const PaymentBoxes = styled.div`
  width: ;
  cursor: pointer;
`;

const InlineH3 = styled.h3`
  display: inline;
`;
const Header = styled.h1`
  margin-left: 22%;
`;

const Billing = () => {
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://lambdafiles.us-east-2.elasticbeanstalk.com/api/users/${profile.nickname}`
  //     )
  //     .then(response => {
  //       console.log(response.data[0].paid);
  //       setBilling(response.data[0].paid);
  //       console.log('***********')
  //       setIsPro(billing);
  //       console.log(isPro)
  //     })
  //     .catch(err => console.log(err));
  // } );
  const [billing, setBilling] = useState(null);
  const [isPro, setIsPro] = useState(null);

  const fetchData = async () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    console.log("++++++++!!!!!!!!!////////");
    console.log(profile.nickname);
    console.log(
      `api.backendproxy.com/api/users/${
        profile.nickname
      }`
    );
    const result = await axios;
    console.log("in await");
    axios
      .get(
        `https://api.backendproxy.com/api/users/${
          profile.nickname
        }`
      )
      .then(response => {
        setBilling(response.data[0].paid);
        setIsPro(billing); 
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const text = `Pro user: ${billing}`;
  if (billing) {
    console.log(isPro);
    console.log("billing: " + billing);
    console.log("isPro: " + isPro);
    return (
      <ProMembershipDiv>
        <TextDiv>
          <h1>Membership Level: Pro</h1>
          <h2>Pro features</h2>
          <UnorderedList>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>See who viewed your file</ListItem>
            <ListItem>See who downloaded your file</ListItem>
            <ListItem>70 days of file storage</ListItem>
          </UnorderedList>
        </TextDiv>
      </ProMembershipDiv>
    );
  }
  return (
    <BasicMembershipDiv>
      <TextDiv>
        <h1>Membership Level: Basic</h1>
        <h2>Basic features</h2>
        <UnorderedList>
          <ListItem>Send files up to 2gb</ListItem>
          <ListItem>See who viewed your file</ListItem>
          <ListItem>See who downloaded your file</ListItem>
          <ListItem>7 days of file storage</ListItem>
        </UnorderedList>
        <h2>Click below to get 70 day file storage</h2> <Stripe />
      </TextDiv>
    </BasicMembershipDiv>
  );
};

export default Billing;

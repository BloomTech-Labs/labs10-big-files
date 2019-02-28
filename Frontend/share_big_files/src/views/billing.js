import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"; 
import Stripe from "../components/StripeFE";

const BasicMembershipDiv = styled.div`
  height: auto;
  width: auto;
  width: 44rem;
  margin-left: 2%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  @media(max-width: 390px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const ProMembershipDiv = styled.div`
  height: auto;
  width: auto;
  width: 37rem;
  margin-left: 2%;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  @media(max-width: 390px) {
    width: 95%;
    margin: 0 auto;
  }
`;

const TextDiv = styled.div`
  width: fit-content;
  padding: 0 5%;
  @media(max-width: 390px) {
    max-width: 95%;
    margin: 0 auto;
  }
`;
const Header1 = styled.h1`
// width: 100%;
margin-left: 20%;
// border-bottom: 2px solid black;
@media(max-width: 390px) {
 margin: 0;
}
`;
const Header2 = styled.h2`
margin-left: 45%;
@media(max-width: 390px) { 
  margin: 0;
}
`;
const Header3 = styled.h2`
margin-left: 35%;
@media(max-width: 390px) {
  
  margin-left: 0%;
}
`;

const UnorderedList = styled.ul`
  text-align: left;
  line-height: 2;
`;
const StripeDiv = styled.div`
  margin-left: 35%;
  @media(max-width: 390px) {
    margin: 0 0 2% 30%;
  }
`;

const ListItem = styled.li`

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
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
 
    axios
      .get(`https://api.backendproxy.com/api/users/${profile.nickname}`)
      .then(response => {
        console.log(response);
        var promise = new Promise(function(resolve, reject) {
          resolve(setBilling(response.data[0].paid));
        });
        promise.then(
          setIsPro(billing), 
          setLoaded(true)
        );
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
 
  if (loaded) {
    if (billing) {
      console.log(isPro);
      console.log("billing: " + billing);
      console.log("isPro: " + isPro);
      return (
        <ProMembershipDiv>
          <TextDiv>
            <Header1>
            <h1>Member Level: Pro</h1> 
            </Header1>
            <Header3>
              <h3>Pro features</h3>
              </Header3>
            <div>
              <ListItem>Send files up to 2gb</ListItem>
              <ListItem>See who viewed your file</ListItem>
              <ListItem>See who downloaded your file</ListItem>
              <ListItem>70 days of file storage</ListItem>
            </div>
          </TextDiv>
        </ProMembershipDiv>
      );
    }
    return (
      <BasicMembershipDiv>
        <TextDiv>
          <Header1>
            <h1>Membership Level:</h1>
            </Header1>
            <Header2>
            <h2>Basic</h2>
            </Header2>
          <Header3>
            <h2>Basic features</h2>
          </Header3>
          <div>
            <ListItem>Send files up to 2gb</ListItem>
            <ListItem>See who viewed your file</ListItem>
            <ListItem>See who downloaded your file</ListItem>
            <ListItem>7 days of file storage</ListItem>
          </div>
          <h2>Click below to get 70 day file storage</h2> <StripeDiv><Stripe /></StripeDiv>
        </TextDiv>
      </BasicMembershipDiv>
    );
  }

  return <></>;

};

export default Billing;

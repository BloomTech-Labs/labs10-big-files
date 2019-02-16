import React from "react";
import styled from "styled-components";

const BillingDiv = styled.div`
  margin-left: 2%;
`;

const PaymentInfoHolder = styled.div`
  width: ;
`;
const Subscriptions = styled.div`
  color: black;
`;
const BuyNowButton = styled.div`
  border: 2px solid;
  cursor: pointer;
  text-align: center;
  border-radius: 5%;
  box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.5);
  background-color: white;
`;
const PaymentBoxes = styled.div`
  width: ;
  cursor: pointer;
`;

const InlineH3 = styled.h3`
display: inline;
`;

const Billing = () => {

  return (
    <BillingDiv>
      <PaymentInfoHolder>
          <h1>Billing</h1>
        <PaymentBoxes>
          <h3>CC#</h3>
          <input type="text" name="ccNumber"/>
        </PaymentBoxes>
        <PaymentBoxes>
          <h3>EXP</h3>
          <input type="text" name="ccExp"/>
        </PaymentBoxes>
        <PaymentBoxes>
          <h3>CVV</h3>
          <input type="text" name="ccCVV"/>
        </PaymentBoxes>
      </PaymentInfoHolder>
      <Subscriptions>
        <div>
        <input type="checkbox"/>
          <InlineH3>1 Year Subscription - $10.99</InlineH3> <br/>
          <input type="checkbox"/>
          <InlineH3>1 Month Subscription - $0.99</InlineH3>
        </div>
      </Subscriptions>
      <BuyNowButton>
        <h1>Buy Now!</h1>
      </BuyNowButton>
    </BillingDiv>
  );

};

export default Billing;

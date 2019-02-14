import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Stripe = () => {
  const publishableKey = "pk_test_kYdeWqAG65rNdCvItFT1ZQ0J";
   
  const onToken = token => {
    const body = {
      amount: 555,
      token: token
  };
  axios
      .post("http://localhost:5050/charge", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Upgrade Now" //Component button text
      name="MoveBytes"
      description="Send files without limitations"
      panelLabel="Go Premium" 
      amount={599} //Amount in cents $5.99
      token={onToken}
      locale="auto"
      zipCode={false}
      billingAddress={false}
      stripeKey={publishableKey}
     // image="https://yourdomain.tld/images/logo.svg"
    />
  );
};

export default Stripe;

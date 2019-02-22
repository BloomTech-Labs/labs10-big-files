import React, {useState, useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

sendToDB = () => {
  axios.put("")
}

UPDATE users SET paid = true 
WHERE email = 'volutpat@eusemPellentesque.org' 
RETURNING user_id

router.put("/files/id", (req, res) => {
  const {fk_user_id} = req.params;
  client.query(`UPDATE files SET fk_user_id = ${fk_user_id} WHERE file_id = (select MAX(file_id) FROM files) VALUES ($1)`, [fk_user_id])
      .then(result => {
      res.status(200).json(result);
  })
  .catch(e => {
      console.error(e), res.send(e);
  });
});


const Stripe = () => {
  const [paid, setPaid] = useState(false)
  useEffect(() => console.log(paid))
  const publishableKey = "pk_test_kYdeWqAG65rNdCvItFT1ZQ0J";
  
  const onToken = token => {
    const body = {
      amount: 555,
      token: token
    };

    axios
    .post("https://api.backendproxy.com/api/stripe/charge", body)
    .then(response => {
      console.log(response);
      alert("Payment Success");
      setPaid(true);
      // sendToDB()
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



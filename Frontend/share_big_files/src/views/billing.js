import react from 'react';

const PaymentInfoHolder = styled.div`
    width: ;
`;
const Subscriptions = styled.div`
    color: black;
`;
const BuyNowButton = styled.div`
    cursor: pointer;
`;
const PaymentBoxes = styled.div`
    width: ;
    cursor: pointer;
`;


const Billing = () => {

    return (
        <>
        <PaymentInfoHolder>
            <PaymentBoxes>
                <h3>CC#</h3>
            </PaymentBoxes>
            <PaymentBoxes>
                <h3>EXP</h3>
            </PaymentBoxes>
            <PaymentBoxes>
                <h3>CVV</h3>
            </PaymentBoxes>
        </PaymentInfoHolder>
        <Subscriptions>
            <div>
                <h3>1 Year Subscription - $10.99</h3>
                <h3>1 Month Subscription - $0.99</h3>
            </div>
        </Subscriptions>
        <BuyNowButton>
            <h1>Buy Now!</h1>
        </BuyNowButton>
        </>
    )


};


export default Billing;
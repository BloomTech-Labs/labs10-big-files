import React from 'react'
import styled from 'styled-components';
import "./pricing.css"

const Pricing = () => {
    return (
        <SplashPrice id="features">
            <div className="parent">
            <LeftChild> </LeftChild>
            <RightChild>
                <div class="price-table-wrapper">
                    <h1>Competitive Pricing</h1>
                    <div class="pricing-table">
                        <h2 class="pricing-table__header">- BASIC -</h2>
                        <h3 class="pricing-table__price">Free</h3>
                        <a target="_blank" class="pricing-table__button">
                        Join Now!
                        </a>
                        <ul class="pricing-table__list">
                        <li>30 day free trial</li>
                        <li>50gb storage space</li>
                        <li>20% discount</li>
                        <li>24 hour support</li>
                        </ul>
                    </div>
                    <div class="pricing-table featured-table">
                        <h2 class="pricing-table__header">- PREMIUM -</h2>
                        <h3 class="pricing-table__price">$24.99</h3>
                        <a target="_blank" class="pricing-table__button" href="stripe">
                        Join Now!
                        </a>
                        <ul class="pricing-table__list">
                        <li>40 day free trial</li>
                        <li>100gb storage space</li>
                        <li>25% discount</li>
                        <li>24 hour support</li>
                        </ul>
                    </div>
                </div>
            </RightChild>
            </div>
        </SplashPrice>
    )
}

export default Pricing


const LeftChild = styled.div`
    width: 38%;

`
const RightChild = styled.div`
    width: 60%;
    left: 40%
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color: black;
    position: relative;

    h1 {
        opacity: 1;
        font-size: 45px;
      }

`
const SplashPrice = styled.div`
    background: rgb(82, 90, 101, .8);
    
    height: 100vh;
    width: 100%;
    position: relative; 
`;
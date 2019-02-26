import React from 'react'
import styled from 'styled-components';

const Features = () => {
    return (
        <SplashFeatures id="features">
            <div className="parent">
            <LeftChild> </LeftChild>
            <RightChild>
                <div>
                    <h1>Easy</h1>
                    <p>MoveBytes has great features, but the best feature is probably that it's so easy that anyone can use it. Just add your files, specify the recipients and you're good to go. No need to zip files yourself, because we will do it for you. If you do want to use additional functionality it's never more than a few clicks away.</p>
                </div>
                <div>
                    <h1>Fast</h1>
                    <p>MoveBytes uses state-of-the-art technology to make your transfers as fast as possible. Transfers are already being compressed on your computer to reduce the amount of data to be sent. Our servers are located all around the world to provide you with the fastest upload and download speed.</p>
                </div>
                <div>
                    <h1>Convenient</h1>
                    <p>Take your files with you everywhere you go and share them easily with your friends, co-workers, and family so you can all have a quick access to the same information!</p>
                </div>
                <div>
                    <h1>Secure</h1>
                    <p>MoveBytes is a secure platform to send and share your photos, your vacation videos, your favorite music, as well as your personal and professional documents.</p>
                </div>
            </RightChild>
            </div>
        </SplashFeatures>
    )
}

export default Features


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
    color: white;
    position: relative;
    

    h1 {
        opacity: 1;
        font-size: 45px;
      }

`
const SplashFeatures = styled.div`
    background: rgb(82, 90, 101, .4);
    
    height: 100vh;
    width: 100%;
    position: relative; 
`;
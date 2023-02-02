import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  position: relative;
  display: flex;
  overflow: hidden;

  ${mobile({ height: "70vh" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Video = styled.video`
  height: 90%;
  ${mobile({ height: "70vh" })}
`;

const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  margin: auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;

  ${mobile({ textAlign: "center" })}
`;

const Desc = styled.p`
  font-size: 20px;
  color: white;
  letter-spacing: 3px;
  font-weight: 600;
  margin: 50px 0px;
`;

const Button = styled.button`
  background: transparent;
  background-color: #005ace;
  border-radius: 10px;
  border: none;
  padding: 3px 15px;
  color: white;
  cursor: pointer;
`;

const IphoneOne = () => {
  return (
    <Container>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Video
              muted
              autoPlay
              type="video/mp4"
              src="https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/small_2x.mp4"
            />
          </ImgContainer>
          <InfoContainer>
            <Title>iPhone 14 Pro</Title>
            <Desc>Semakin Pro.</Desc>
            <Button>Beli</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default IphoneOne;

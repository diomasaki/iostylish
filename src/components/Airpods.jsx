import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 400vh;
  width: 100%;
  background-color: black;
  position: relative;

  ${mobile({ height: "50vh" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  min-height: 400vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ minHeight: "50vh" })}
`;

const ImgContainer = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  ${mobile({ minHeight: "80vh", backgroundColor: "black" })}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  top: -180px;
  position: sticky;
  ${mobile({ height: "100%", width: "100%", top: "-100px" })}
`;

const InfoContainer = styled.div`
  height: 90%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  justify-content: center;
  position: absolute;

  ${mobile({ alignItems: "flex-end" })}
`;

const Title = styled.h1`
  font-size: 200px;
  color: white;

  ${mobile({ fontSize: "94px", padding: "0px 4px" })}
`;

const Airpods = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrolledStart);
    return () => window.removeEventListener("scroll", scrolledStart);
  });

  const scrolledStart = () => {
    const scrollFirst = document.documentElement.scrollTop;
    const scrollSec =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollthird = Math.ceil((scrollFirst / scrollSec) * 92);

    setScrolled(scrollthird);
  };

  return (
    <Container>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image
              src={`https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/small/${scrolled
                .toString()
                .padStart(4, "0")}.jpg`}
            />
          </ImgContainer>
          <InfoContainer>
            <Title>Semakin Pro.</Title>
          </InfoContainer>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default Airpods;

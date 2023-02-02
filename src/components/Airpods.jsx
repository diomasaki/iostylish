import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  min-height: 200vh;
  width: 100%;
  background-color: black;

  ${mobile({ overflow: "hidden", minHeight: "10px" })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 400vh;
  cursor: pointer;
  ${mobile({ height: "50vh" })}
`;

const PodsContainer = styled.img`
  height: 20%;
  top: 50px;
  display: flex;
  position: sticky;
  margin: -300px 0px;
  ${mobile({ height: "70%", top: "-20px", position: "sticky", marginTop:"1px" })}
`;

const Info = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ marginBottom: "40px", textAlign: "center" })}
`;

const Title = styled.h1`
  font-size: 200px;
  color: white;
  font-weight: 800;

  ${mobile({ fontSize: "80px" })}
`;

const Airpods = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", scrolledFraction);
    return () => window.removeEventListener("scroll", scrolledFraction);
  });

  const scrolledFraction = () => {
    const scrollTest1 = document.documentElement.scrollTop;
    const scrollTest2 =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollTest3 = Math.ceil((scrollTest1 / scrollTest2) * 100);

    setScrolled(scrollTest3);
  };
  return (
    <Container>
      <Wrapper>
        <PodsContainer
          src={`https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/small/${scrolled
            .toString()
            .padStart(4, "0")}.jpg`}
        />
      </Wrapper>
      <Info>
        <Title>Sekarang Pro.</Title>
      </Info>
    </Container>
  );
};

export default Airpods;

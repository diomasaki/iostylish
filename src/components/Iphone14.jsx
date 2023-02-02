import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 90vh;
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ width: "100%", overflow: "hidden", height: "50vh" })}
`;

const Wrapper = styled.div`
  height: 100%;
  margin: 50px 0px;
  display: flex;
  scale: 1.2;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  height: 80%;

  ${mobile({ height: "120%", display: "flex", marginTop: "160px" })}
`;

const Iphone14 = () => {
  return (
    <Container>
      <Wrapper>
        <Video
          muted
          autoPlay={"autoplay"}
          src="https://www.apple.com/105/media/us/iphone-14-pro/2022/a3e991f3-071e-454c-b714-1b2319bb97a8/anim/hero/small_2x.mp4"
        />
      </Wrapper>
    </Container>
  );
};

export default Iphone14;

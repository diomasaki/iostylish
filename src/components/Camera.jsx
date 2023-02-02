import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90vh;
  width: 100%;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CameraLens = styled.img`
  height: 80%;
`;

const Camera = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const scrollTest1 = document.documentElement.scrollTop;
    const scrollTest2 =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollTest3 = Math.ceil((scrollTest1 / scrollTest2) * 100);
    setScrolled(scrollTest3);
  }, []);

  return (
    <Container>
      <Wrapper>
        <CameraLens
          src={`https://www.apple.com/v/iphone-14-pro/c/images/overview/camera/header/quad_sensor_startframe__e6tvddq62ieu_small_2x/${scrolled
            .toString()
            .padStart(4, "0")}.jpg`}
        />
      </Wrapper>
    </Container>
  );
};

export default Camera;

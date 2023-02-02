import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  background-color: #1e1e1e;
  border-top: 1px solid grey;
  border-bottom: 0.1px solid grey;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 2;
  color: white;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 25px;
`;

const MenuItem = styled.div`
  margin-left: 25px;
  font-size: 14px;
`;

const MenuItems = styled.div`
  margin-left: 17px;
  font-size: 14px;
  background-color: #005ace;
  width: 50px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Airpods Pro (generasi ke-2)</Title>
        </Left>
        <Right>
          <MenuItem>Ringkasan</MenuItem>
          <MenuItem>Spesifikasi Teknis</MenuItem>
          <MenuItem>Bandingkan</MenuItem>
          <MenuItems>Beli</MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

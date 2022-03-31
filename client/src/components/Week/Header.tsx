import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import routes from "../../routes.json";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <IconContainer onClick={() => navigate(routes.HOME)}>
        <IoIosArrowBack size={30} />
      </IconContainer>
      <h3>Next 7 days</h3>
      <div />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: white;
    font-weight: 600;
  }
`;

const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

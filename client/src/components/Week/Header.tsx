import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import routes from "../../routes.json";
import DayItem from "./DayItem";

const Header = ({ days }: { days?: any }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Flex>
        <IconContainer onClick={() => navigate(routes.HOME)}>
          <IoIosArrowBack size={30} />
        </IconContainer>
        <h3>Next 3 days</h3>
        <div />
      </Flex>
      <Row>
        {days.map((item: any) => {
          return (
            <DayItem
              key={item.date}
              temp={Math.floor(item.day.avgtemp_c)}
              day={item.date}
              icon={item.day.condition.icon}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  column-gap: 15px;

  h3 {
    color: white;
    font-weight: 500;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  overflow-x: auto;
  margin-top: 10px;
  padding-bottom: 5px;
`;

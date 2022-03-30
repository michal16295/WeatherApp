import React from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import FlatListItem from "./FlatListItem";

const FlatList = ({ hours }: { hours?: any }) => {
  return (
    <Container>
      <Row>
        <h2>Today</h2>
        <h4>Next 7 Days </h4>
      </Row>
      <Row>
        {hours.map((item: any, index: number) => {
          return (
            <FlatListItem
              key={index.toString()}
              temp={Math.floor(item.temp_c)}
              icon={item.condition.icon}
              hour={item.time}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default FlatList;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  padding-bottom: 5px;

  h4 {
    color: rgba(87, 151, 252, 1);
    cursor: pointer;
  }
`;

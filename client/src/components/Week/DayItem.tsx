import React, { useEffect } from "react";
import styled, { css } from "styled-components";

interface IProps {
  selected?: boolean;
}

const FlatListItem = ({
  day,
  temp,
  icon,
}: {
  day: string;
  temp: number;
  icon: string;
}) => {
  const d = new Date(day);
  const dayName = d.toString().split(" ")[0];
  return (
    <Container selected={new Date().getDate() === d.getDate()}>
      <Image>
        <img src={icon} />
      </Image>
      <DegText>{temp}°</DegText>
      <TimeText>{dayName}</TimeText>
    </Container>
  );
};

export default FlatListItem;

const Container = styled.div<IProps>`
  min-width: 60px;

  background-color: ${(props) => (props.selected ? "white" : "#82B0F8")};
  min-height: 100px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 5px 5px;
  align-items: center;
  color: ${(props) => (props.selected ? "#8e7ff8" : "white")};
  box-shadow: 0 3px 6px #5b98fc;
`;

const Image = styled.div`
  width: 40px;
  height: 40px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const TimeText = styled.div`
  font-size: clamp(1rem, 4vw, 1.2rem);
  font-weight: 600;
`;

const DegText = styled.div`
  font-size: clamp(1.3rem, 4vw, 1.5rem);
  font-weight: bold;
`;

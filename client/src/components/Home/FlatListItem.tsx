import React from "react";
import styled from "styled-components";

interface IProps {
  selected?: boolean;
}

const FlatListItem = ({
  temp,
  hour,
  icon,
}: {
  temp: number;
  hour: string;
  icon: string;
}) => {
  const date = new Date(hour).toLocaleTimeString("he", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Container selected={true}>
      <TimeText>{date}</TimeText>
      <Image>
        <img src={icon} />
      </Image>
      <DegText>{temp}°</DegText>
    </Container>
  );
};

export default FlatListItem;

const Container = styled.div<IProps>`
  min-width: 60px;
  margin-right: 10px;
  background-color: ${(props) => (props.selected ? "#8E7FF8" : "#f8f8f8")};
  height: 100px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#cfd0d1")};
  box-shadow: 3px 3px 6px rgb(212, 207, 251);
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
  font-size: clamp(0.75rem, 3.5vw, 1rem);
`;

const DegText = styled.div`
  font-size: clamp(1.2rem, 4vw, 1.4rem);
  font-weight: 600;
`;

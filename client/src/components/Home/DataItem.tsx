import React from "react";
import styled from "styled-components";

const DataItem = ({ icon, value }: { icon?: string; value: string }) => {
  return (
    <Container>
      <Box>
        <img src={icon} />
      </Box>
      <Title>{value}</Title>
    </Container>
  );
};

export default DataItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 15px;
  background-color: #f8f8f8;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: auto;
  }
`;

const Title = styled.div`
  font-size: 13px;
  color: #63666c;
  font-weight: 500;
`;

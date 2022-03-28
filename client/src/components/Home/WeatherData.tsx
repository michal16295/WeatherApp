import React from "react";
import styled from "styled-components";

const WeatherData = () => {
  return (
    <Container>
      <Box>
        <Image>
          <img src="https://res.cloudinary.com/photocloudmichal/image/upload/v1648477033/weather/sun/8_acbu1p.png" />
        </Image>
      </Box>
    </Container>
  );
};

export default WeatherData;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Box = styled.div`
  border-radius: 12px;
  width: 100%;
  background: linear-gradient(
    110deg,
    rgba(171, 202, 253, 1) 0%,
    rgba(87, 151, 252, 1) 100%
  );
  min-height: 200px;
  box-shadow: 2px 6px 6px rgb(191, 215, 252);
  padding: 10px 15px;
`;

const Image = styled.div`
  width: 150px;
  height: auto;
  margin-top: -30px;

  img {
    height: 100%;
    width: 100%;
  }
`;

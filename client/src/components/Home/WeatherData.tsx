import React from "react";
import styled from "styled-components";

const WeatherData = ({
  temp,
  feelsLike,
  text,
}: {
  temp: number;
  feelsLike: number;
  text: string;
}) => {
  return (
    <Container>
      <Box>
        <Row>
          <div>
            <Image>
              <img src="https://res.cloudinary.com/photocloudmichal/image/upload/v1648477033/weather/sun/8_acbu1p.png" />
            </Image>
            <h2>{text}</h2>
            <h3>Noon</h3>
          </div>
          <Info>
            <div>{Math.floor(temp)}°</div>
            <p>Feels like {Math.floor(feelsLike)}°</p>
          </Info>
        </Row>
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
  border-radius: 20px;
  width: 100%;
  background: linear-gradient(
    110deg,
    rgba(171, 202, 253, 1) 0%,
    rgba(87, 151, 252, 1) 100%
  );
  min-height: 200px;
  box-shadow: 3px 7px 8px 1px rgb(191, 215, 252);
  padding: 10px 15px;
  color: #fdfefe;

  h2 {
    line-height: 1px;
    font-size: clamp(1.4rem, 4vw, 1.5rem);
  }
  h3 {
    font-size: clamp(1rem, 4vw, 1.1rem);
    line-height: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.div`
  width: 150px;
  height: auto;
  margin-top: -45px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Info = styled.div`
  div {
    font-size: 72px;
    background: -webkit-linear-gradient(#eee, #a7c8fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
  p {
    color: #ecf3fd;
    font-weight: 600;
    line-height: 1px;
    font-size: clamp(1rem, 4vw, 1.2rem);
  }
`;

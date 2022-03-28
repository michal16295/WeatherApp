import React from "react";
import styled from "styled-components";

const Header = ({ city, country }: { city: string; country: string }) => {
  const date = new Date().toLocaleDateString("en", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Container>
      <div>
        <h2>{city},</h2>
        <h2>{country}</h2>
        <p>{date}</p>
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;

  h2 {
    font-size: clamp(1.3rem, 4vw, 1.5rem);
    line-height: 10px;
  }

  p {
    color: #d7d7d9;
    font-size: clamp(0.875rem, 3.5vw, 1rem);
    font-weight: 500;
  }
`;

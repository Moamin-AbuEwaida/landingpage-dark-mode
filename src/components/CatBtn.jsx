import React from "react";
import styled from "styled-components";

const CatBtn = ({ name }) => {
  return (
    <CarBtnStyled>
      <p>{name}</p>
    </CarBtnStyled>
  );
};

const CarBtnStyled = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: var(--color-primary);
    p {
      color: #222;
    }
  }
  p {
    text-align: center;
  }
`;

export default CatBtn;

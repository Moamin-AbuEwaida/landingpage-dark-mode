import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

const ServiceItem = ({ icon, name, para }) => {
  return (
    <ServiceItemStyled>
      <div className="image">
        <img src={icon} alt="" />
      </div>
      <h4>{name}</h4>
      <p>{para}</p>
    </ServiceItemStyled>
  );
};

const ServiceItemStyled = styled.div`
  &:hover {
    .image {
      border: 2px dashed var(--color-primary);
    }
  }
  text-align: center;
  .image {
    border-radius: 7px;
    border: 2px dashed #f4f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    display: inline-block;
    transition: all 0.4s ease-in-out;
    img {
      width: 100px;
      padding: 2rem;
      background-color: #000;
      margin: 1rem;
      border-radius: 7px;
    }
  }
  h4 {
    color: var(--color-primary);
    padding: 1rem 0;
  }
  p {
    font-size: 1rem;
    line-height: 1.7rem;
  }
`;

export default ServiceItem;

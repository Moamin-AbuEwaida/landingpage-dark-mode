import React from "react";
import styled from "styled-components";

const StaffCard = ({
  img,
  bookmark,
  name,
  tit,
  rating,
  rating_half,
  stack,
}) => {
  return (
    <StaffCardStyled>
      <div className="s-card-container">
        <img className="bookmark" src={bookmark} alt="" />
        <img src={img} alt="" />
        <p>{name}</p>
        <p className="title">{tit}</p>
        <div className="rating-con">
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <img src={rating} alt="" />
          <img src={rating_half} alt="" />
        </div>
        <p className="stack">{stack}</p>
        <div className="btn-profile">View Profile</div>
      </div>
    </StaffCardStyled>
  );
};

const StaffCardStyled = styled.section`
  position: relative;
  background-color: #222;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  border: 1px solid #e1e1e1;
  .bookmark {
    position: absolute;
    top: 1.3rem;
    right: 0.8rem;
    width: 20px !important;
  }
  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: #111;
    border: 1px solid #f5f5f5;
    transform: translateY(-5px);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  }
  .s-card-container {
    padding: 3rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 140px;
      border-radius: 50%;
      margin-bottom: 1rem;
    }
    h4 {
      color: var(--color-white);
      padding-bottom: 1rem;
    }
    .title {
      color: var(--color-primary);
      padding-bottom: 1rem;
      font-size: 1rem;
    }
    .rating-con {
      display: flex;
      img {
        width: 20px;
      }
    }
    .stack {
      font-size: 1rem;
      line-height: 1.7rem;
      padding-bottom: 1rem;
      text-align: center;
    }
    .btn-profile {
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: var(--color-primary);
      font-weight: 400;
      background-color: #000;
      padding: 0.7rem 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--color-primary);
      font-size: 1rem;
      &:hover {
        background-color: var(--color-primary);
        color: #fff;
      }
    }
  }
`;

export default StaffCard;

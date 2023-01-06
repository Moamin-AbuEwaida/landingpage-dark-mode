import React from "react";
import styled from "styled-components";

const JobCard = ({ bg, logo, name, loc, tit, type, stack, salary }) => {
  return (
    <JobCardStyled>
      <div className="card-container">
        <div className="card-top">
          <img src={logo} alt="" />
          <div className="c-top-text">
            <h5>{name}</h5>
            <p>{loc}</p>
          </div>
        </div>
        <h4 className="c-title">{tit}</h4>
        <p className="type" style={{ color: bg }}>
          {type}
        </p>
        <p className="stack">{stack}</p>
        <div className="job-info">
          <p>
            {salary} <span>/ Year</span>
          </p>
          <div className="btn">Apply Now</div>
        </div>
      </div>
    </JobCardStyled>
  );
};

const JobCardStyled = styled.div`
  background-color: #222;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.01);
  border: 1px solid #222;
  &:hover {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    border: 1px solid #e1e1e1;
    transition: all 0.4s ease-in-out;
  }
  .card-container {
    padding: 2.3rem;
    .card-top {
      display: flex;
      align-items: center;
      padding-bottom: 1.2rem;
      .c-top-text {
        padding-left: 2rem;
        h5 {
          color: var(--color-white);
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          font-size: 1.3rem;
          &:hover {
            color: var(--color-primary);
          }
        }
        p {
          font-size: 1rem;
          padding-top: 0.3rem;
        }
      }
      img {
        padding: 1rem;
        background-color: var(--color-primary);
        border-radius: 8px;
        width: 80px;
        height: 80px;
      }
    }
    .c-title {
      font-size: 1.6rem;
      color: var(--color-white);
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      padding-bottom: 1rem;
      &:hover {
        color: var(--color-primary);
      }
    }
    .type {
      padding-bottom: 1rem;
      font-weight: 400;
    }
    .stack {
      padding-bottom: 1.2rem;
      line-height: 2.2rem;
    }
    .job-info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        color: var(--color-primary);
        font-size: 0.9rem;
        span {
          color: #656565;
          font-size: 1rem;
        }
      }
      .btn {
        background-color: var(--color-primary);
        font-weight: 500;
        padding: 0.6rem 0.9rem;
        cursor: pointer;
        border-radius: 8px;
        text-align: center;
      }
    }
  }
`;
export default JobCard;

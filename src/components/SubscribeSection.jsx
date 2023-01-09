import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

const SubscribeSection = () => {
  return (
    <SectionSubscribeStyled>
      <InnerLayout>
        <div className="s-container">
          <div className="left">
            <h2>
              Subscribe to our newsletter <br /> for the latest news
            </h2>
          </div>
          <div className="right">
            <div className="input-control">
              <input type="text" placeholder="Enter Your Email" />
              <div className="s-btn">Subscribe Now</div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </SectionSubscribeStyled>
  );
};

const SectionSubscribeStyled = styled.section`
  background-color: var(--color-primary);
  .s-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .left {
      display: flex;
      align-items: center;
      h2 {
        font-size: 2.5rem;
        line-height: 4rem;
        color: #222;
      }
    }
    .right {
      display: flex;
      align-items: center;
    }
    .input-control {
      position: relative;
      font-weight: 400;
      width: 100%;
      input {
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        padding: 1.4rem 2rem;
        outline: none;
        border: none;
        border-radius: 8px;
      }
      .s-btn {
        position: absolute;
        top: 50%;
        background-color: #000;
        right: 0.2rem;
        transform: translateY(-50%);
        padding: 1.1rem 2rem;
        cursor: pointer;
        border-radius: 7px;
        transition: all 0.4s ease-in-out;
        &:hover {
          background-color: #222;
        }
      }
    }
  }
`;
export default SubscribeSection;

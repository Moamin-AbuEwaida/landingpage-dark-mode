import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import google from "../img/googleappstore.png";
import apple from "../img/appstore.png";
import business from "../img/business.jpg";

const SectionDownload = () => {
  return (
    <SectionDownloadStyled>
      <div className="d1-overlay"></div>
      <InnerLayout>
        <div className="title-container">
          <div className="d1-container">
            <h2>New Version Available</h2>
            <h1>
              Download Our Mobile App. <br /> It's sSImple and Better than ever
            </h1>
            <div className="store-btns">
              <div className="store-btn google">
                <img src={google} alt="" />
              </div>
              <div className="store-btn apple">
                <img src={apple} alt="" />
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </SectionDownloadStyled>
  );
};

const SectionDownloadStyled = styled.section`
  background-image: url(${business});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  .d1-container {
    position: relative;
    z-index: 7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 3rem;
      padding-top: 2rem;
    }
  }
  .store-btns {
    display: flex;
    padding-top: 2.5rem;
    .google,
    .apple {
      border-radius: 7px;
      curser: pointer;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      img {
        width: 120px;
      }
    }
    .apple {
      margin-left: 1rem;
    }
  }
`;

export default SectionDownload;

import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg";
import hero from "../img/hero.jpg";
import search from "../img/search.svg";

const Header = () => {
  return (
    <HeaderStyled>
      <nav className="navigation">
        <div className="nav-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Near Jobs</a>
            </li>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <a href="#" className="cta-btn">
            {" "}
            + create account
          </a>
        </div>
      </nav>
      <div className="header-content">
        <h1>
          Over <span>15 000</span> jobs available <br /> You can choose your
          dream job
        </h1>
        <p className="main-para">
          Find great job for build bright career. Have many job in this
          platform.
        </p>
        <div className="input-control">
          <input type="text" placeholder="Job Title Or Keywords" />
          <select name="location" id="location">
            <option value="">US</option>
            <option value="">UK</option>
            <option value="">Dubai</option>
            <option value="">India</option>
          </select>
          <select name="jobs" id="jobs">
            <option value="dev">Angular</option>
            <option value="dev">React</option>
            <option value="dev">Python</option>
            <option value="dev">Web Development</option>
            <option value="dev">UI/UX</option>
          </select>
          <button className="search-btn">
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  min-height: 90vh;
  position: relative;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${hero}) no-repeat;
  .navigation {
    border-bottom: 1px solid var(--color-white);
    .nav-wrapper {
      margin: 0 20rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 10vh;
      @media screen and (max-width: 1180px) {
        margin: 0 10rem;
      }
      @media screen and (max-width: 767px) {
        margin: 0 5rem;
      }
    }
    .logo {
      img {
        width: 40px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      li {
        margin: 0 1rem;
      }
    }
    .cta-btn {
      display: inline-block;
      background-color: var(--color-primary);
      padding: 1rem 1.7rem;
      border-radius: 8px;
      text-align: center;
      color: var(--color-primary-dark);
    }
  }
  .header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 60%;
    h1 {
      font-size: 3rem;
      span {
        font-size: 4rem;
        color: var(--color-primary);
      }
    }
    .main-para {
      padding: 2rem;
      color: var(--color-white);
    }
    .input-control {
      display: flex;
      justify-content: center;
      width: 100%;
      input,
      select {
        background-color: var(--color-white);
        padding: 1.4rem;
        border: none;
        outline: none;
        margin-right: 10px;
        border-radius: 8px;
        font-size: inherit;
        width: 40%;
        color: #a1a1a1;
        font-weight: 400;
      }
      input[type="text":placeholder] {
        color: #a1a1a1;
      }
    }
    .search-btn {
      background-color: var(--color-primary);
      padding: 0.5rem 2rem;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      cursor: pointer;
      color: #222;
    }
  }
`;
export default Header;

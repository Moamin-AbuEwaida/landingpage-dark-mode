import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import JobCard from "./JobCard";
import Title from "./Title";
import logo1 from "../img/img-1.svg";
import logo2 from "../img/img-2.svg";
import logo3 from "../img/img-3.svg";
import logo4 from "../img/img-4.svg";
import logo5 from "../img/img-5.svg";
import logo6 from "../img/img-6.svg";
import logo7 from "../img/img-7.svg";

const SectionJobs = () => {
  return (
    <SectionJobsStyle>
      <InnerLayout>
        <div className="title-container">
          <Title
            name={"Recent Jobs"}
            para={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!"
            }
          />
        </div>
        <div className="cards-container">
          <JobCard
            logo={logo2}
            bg={"#037FFF"}
            name={"Gowind Pro Inc."}
            loc={"London, UK"}
            tit={"Game Developer"}
            type={"Remote"}
            stack={"ASP.Net, Node.js, Typescript, Unity or Unreal Engine"}
            salary={"$79,000 - $150,000"}
          />
          <JobCard
            logo={logo3}
            bg={"#27AE60"}
            name={"Code Axis"}
            loc={"California, USA"}
            tit={"Web Developer"}
            type={"Full Time"}
            stack={"React, Node, Express, MongoDB, JavaScript, Typescript"}
            salary={"$50,000 - $95,000"}
          />
          <JobCard
            logo={logo4}
            bg={"#037FFF"}
            name={"Adobe"}
            loc={"Cape Town, SA"}
            tit={"Data Scientist"}
            type={"Remote"}
            stack={"C++, Machine Learning, Python, CSV, MySQL or PostgreSQL"}
            salary={"$70,000 - $90,000"}
          />
          <JobCard
            logo={logo5}
            bg={"#EB5757"}
            name={"Google"}
            loc={"Reading, UK"}
            tit={"Software Developer"}
            type={"Part Time"}
            stack={"ASP.Net, Node.js, Typescript, VUE.js, C# or Python"}
            salary={"$79,000 - $150,000"}
          />
          <JobCard
            logo={logo1}
            bg={"#EB5757"}
            name={"Google"}
            loc={"Reading, UK"}
            tit={"Software Developer"}
            type={"Part Time"}
            stack={"ASP.Net, Node.js, Typescript, VUE.js, C# or Python"}
            salary={"$79,000 - $150,000"}
          />
          <JobCard
            logo={logo6}
            bg={"#27AE60"}
            name={"Github"}
            loc={"California, USA"}
            tit={"Web Developer"}
            type={"Full Time"}
            stack={"React, Node, Express, MongoDB, JavaScript, Typescript"}
            salary={"$50,000 - $95,000"}
          />
          <JobCard
            logo={logo7}
            bg={"#27AE60"}
            name={"Behance"}
            loc={"Cape Town, SA"}
            tit={"Software Engineer"}
            type={"Full Time"}
            stack={"C++, Python, CSV, MySQL or PostgreSQL, Web GL"}
            salary={"$70,000 - $90,000"}
          />
          <JobCard
            logo={logo2}
            bg={"#037FFF"}
            name={"Maches"}
            loc={"London, UK"}
            tit={"Web Developer"}
            type={"Remote"}
            stack={"ASP.Net, Node.js, Typescrip, C# or Python, Menia Tech"}
            salary={"$79,000 - $150,000"}
          />
          <JobCard
            logo={logo1}
            bg={"#EB5757"}
            name={"Alpha India"}
            loc={"California, USA"}
            tit={"Web Developer"}
            type={"Part Time"}
            stack={"React, Node, Express, MongoDB, JavaScript, Typescript"}
            salary={"$50,000 - $95,000"}
          />
        </div>
      </InnerLayout>
    </SectionJobsStyle>
  );
};

const SectionJobsStyle = styled.section`
  background-color: #000;
  .cards-container {
    padding-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-gap: 2rem;
  }
`;
export default SectionJobs;

import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import CatBtn from "./CatBtn";
import Title from "./Title";

const SectionCategory = () => {
  return (
    <SectionCategoryStyled>
      <InnerLayout>
        <div className="title-container">
          <Title
            name={"All Categories"}
            para={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!"
            }
          />
        </div>
        <div className="category-container">
          <CatBtn name={"Game Development {600}"} />
          <CatBtn name={"UI Design {1000}"} />
          <CatBtn name={"UX Design {3,400}"} />
          <CatBtn name={"Creative/Director {71}"} />
          <CatBtn name={"Software Engineer {2000+}"} />
          <CatBtn name={"Software Developer {200}"} />
          <CatBtn name={"Product Manager {900}"} />
          <CatBtn name={"Product Designer {100}"} />
          <CatBtn name={"Researchers {26}"} />
          <CatBtn name={"Web Designer {200}"} />
          <CatBtn name={"Web Developer {1400+}"} />
          <CatBtn name={"App Developer {2,600}"} />
        </div>
      </InnerLayout>
    </SectionCategoryStyled>
  );
};

const SectionCategoryStyled = styled.section`
  .category-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    padding-top: 3rem;
  }
`;

export default SectionCategory;

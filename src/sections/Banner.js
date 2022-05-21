import React from "react";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 64em) {
    /* border: 3px solid red; */
    min-height: 300px;
    height: 70vh;
  }
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const BannerComp = styled.h1`
  font-size: ${props => props.theme.font3xl};
  font-family: "Kaushan Script";
  color: ${props => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  z-index: 12;
  @media (max-width: 70em) {
    /* font-size: ${props => props.theme.font2xl}; */
    margin: 1rem 0;
  }
  @media (max-width: 64em) {
    font-size: ${props => props.theme.fontxl};
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: ${props => props.theme.fontlg};
  }
  @media (max-width: 30em) {
    font-size: ${props => props.theme.fontmd};
  }

  span {
    display: block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
  }
`;

const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComp>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            Lorem ipsum dolor sit amet
          </span>
        </BannerComp>
        <BannerComp>
          <span
            data-scroll
            data-scroll-speed="-6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            Exercitationem obcaecati
          </span>
        </BannerComp>
        <BannerComp>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            Asperiores repellat quite
          </span>
        </BannerComp>
        <BannerComp>
          <span
            data-scroll
            data-scroll-speed="-6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            voluptatum magnam{" "}
          </span>
        </BannerComp>
        <BannerComp>
          <span
            data-scroll
            data-scroll-speed="6"
            data-scroll-direction="horizontal"
            data-scroll-target="#up"
          >
            praesentium et eligendi hic
          </span>
        </BannerComp>
      </Container>
    </Section>
  );
};

export default Banner;

import React from "react";
import styled from "styled-components";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  /* overflow: hidden; */
  display: flex;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.font4xl};
  font-family: "Kaushan Script";
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }

  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
        asperiores, sit deserunt impedit possimus nostrum! Recusandae corporis
        deserunt nesciunt cumque fugiat? Facilis reiciendis minima, placeat quo
        nisi illum laborum.
        <br />
        <br />
        Provident voluptate possimus consectetur dolorum aliquam nulla sapiente
        animi. In repudiandae aperiam beatae perspiciatis voluptatem soluta
        molestias ad dolore autem officia blanditiis quae ea alias dolor dolores
        magnam id nisi, itaque magni culpa quos.
        <br />
        <br />
        Exercitationem adipisci voluptate, tempora quae est odit, molestias
        perferendis quos laborum nostrum facilis distinctio placeat deserunt sit
        accusantium id aliquid nihil. Cum expedita neque, eius deleniti vero
        provident voluptatum, esse error unde temporibus cumque nihil. Corporis.
      </Left>
      <Right>
        <img src={img1} alt="About Us" />
        <img
          data-scroll
          data-scroll-speed="5"
          src={img2}
          className="small-img-1"
          alt="About Us"
        />
        <img
          data-scroll
          data-scroll-speed="-3"
          src={img3}
          className="small-img-2"
          alt="About Us"
        />
      </Right>
    </Section>
  );
};

export default About;

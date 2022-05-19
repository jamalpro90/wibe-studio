import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../assets/Images/11.webp";
import img2 from "../assets/Images/12.webp";
import img3 from "../assets/Images/13.webp";
import img4 from "../assets/Images/14.webp";

const Section = styled.div`
  min-height: 100vh;
  width: 100vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: gold; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;

  z-index: 11;
  box-shadow: 0 0 0 5vw ${props => props.theme.text};
  border: 3px solid ${props => props.theme.body};
`;

const Title = styled.h1`
  font-size: ${props => props.theme.font3xl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${props => props.theme.body};
  text-shadow: 2px 2px 1px ${props => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
`;

const Text = styled.div`
  width: 20%;
  font-size: ${props => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  /* width: 65%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;

const Product = ({ img, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const scrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = scrollingRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers: true,
        },
        ease: "none,",
      });

      // Vertical scrolling
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".App", // locomotive element
            scrub: true,
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // let's clear the instances
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref}>
      <Overlay />

      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        New Arrivals
      </Title>

      <Container ref={scrollingRef}>
        <Product img={img1} title="Denim" />
        <Product img={img2} title="Cool Dresses" />
        <Product img={img3} title="Jackets" />
        <Product img={img4} title="T-Shirt" />
      </Container>

      {/* Text */}
      <Text data-scroll data-scroll-sticky data-scroll-speed="-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero
        asperiores, sit deserunt impedit possimus nostrum! Recusandae corporis
        deserunt nesciunt cumque fugiat? Facilis reiciendis minima, placeat quo
        nisi illum laborum.
        <br />
        <br />
        Provident voluptate possimus consectetur dolorum aliquam nulla sapiente
        animi. In repudiandae aperiam beatae perspiciatis.
        <br />
        <br />
        Voluptatem soluta molestias ad dolore autem officia blanditiis quae ea
        alias dolor dolores magnam id nisi, itaque magni culpa quos.
      </Text>
    </Section>
  );
};

export default NewArrival;

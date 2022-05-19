import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/Walking Girl.mp4";
import { motion } from "framer-motion";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  z-index: 1;
`;

const Title = styled(motion.div)`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text};

  div {
    display: flex;
  }

  h1 {
    font-family: "kaushan Script";
    font-size: ${props => props.theme.font4xl};
    text-shadow: 3px 3px 3px ${props => props.theme.body};
  }
  h2 {
    font-family: "Sirin Stencil";
    font-size: ${props => props.theme.fontlg};
    text-shadow: 3px 3px 3px ${props => props.theme.body};
    /* font-weight: 300; */
    text-transform: capitalize;
  }
`;

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 2,
      delay: 5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1.5,
    },
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer>
      <DarkOverlay />
      <Title variatns={container} initial="hidden" animate="show">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.13"
          >
            W
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.09"
          >
            i
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.06"
          >
            b
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-speed="4"
            data-scroll-delay="0.04"
          >
            e
          </motion.h1>
        </div>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-speed="2"
          data-scroll-delay="0.04"
        >
          Inspire, Create, Believe
        </motion.h2>
      </Title>

      <video src={MainVideo} loop autoPlay muted />
    </VideoContainer>
  );
};

export default CoverVideo;

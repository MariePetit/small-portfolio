import React from "react";

import styled, { keyframes } from "styled-components";
import { FiArrowUp } from "react-icons/fi";

import { Projects } from "./Projects";
import { About } from "./About";
import { Flicker } from "./Flicker";
import { EagleTek } from "./EagleTek";

export const MobileHomepage = () => {
  const onClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Wrapper>
        <h1>Marie Petit</h1>
        <UpButton onClick={onClick}>
          <FiArrowUp size={25} />
        </UpButton>
        <Rotator>
          <h2>Web Developer</h2>
          <h2>
            html | css | javascript | node.js | react.js | express | mongoDB
          </h2>
          <h2>
            Gamer, ukulele learner, talented shower singer & mom of the cutest
            doggo.
          </h2>
          <h2>No, for real, he's really cute.</h2>
        </Rotator>
      </Wrapper>
      <Separator id="about"></Separator>
      <About />
      <Separator id="projects"></Separator>
      <Projects />
      <Separator id="flicker"></Separator>
      <Flicker />
      <Separator id="eagletek"></Separator>
      <EagleTek />
    </>
  );
};

const rotate = keyframes`
0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
}

2.5% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

25% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

27.5% {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
}

99.9999% {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
}

100% {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
}
`;

const Separator = styled.div``;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 70px;
  }
`;

const UpButton = styled.button`
  background: none;
  position: fixed;
  right: 0;
  bottom: 0;
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  transition: 0.3s ease-in-out;
  color: white;
  font-size: 22px;

  &:hover {
    cursor: pointer;
    color: gold;
    border: 2px solid gold;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Rotator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  h2 {
    margin: auto;
    font-size: 24px;
    position: absolute;
    top: 0;
    opacity: 0;
    transform: translate3d(0, 50px, 0);
    animation: ${rotate} 10s infinite;
    transition-timing-function: cubic-bezier(0.2, 0.5, 0.3, 1);

    &:nth-of-type(2) {
      animation-delay: 2.5s;
    }

    &:nth-of-type(3) {
      animation-delay: 5s;
    }

    &:nth-of-type(4) {
      animation-delay: 7.5s;
    }
  }
`;

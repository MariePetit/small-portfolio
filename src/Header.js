import React from "react";

import styled, { keyframes } from "styled-components";
import { FiGithub, FiLinkedin, FiMail, FiMenu } from "react-icons/fi";

export const Header = () => {
  return (
    <Wrapper>
      <Links>
        <a
          href="https://www.linkedin.com/in/mariie-petit/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin size={30} />
        </a>
        <a
          href="https://github.com/MariePetit"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub size={25} />
        </a>
        <a
          href="mailto:small.mariie@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail size={30} />
        </a>
      </Links>
      <Nav>
        <FiMenu size={40} />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
};

const slideLeft1 = keyframes`
    0% {right: 0; opacity: 0%; visibility: hidden}
    100% {right: 40px; opacity: 100%; visibility: visible}
`;
const slideLeft2 = keyframes`
    0% {right: 0; opacity: 0%; visibility: hidden}
    100% {right: 150px; opacity: 100%; visibility: visible}
`;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  z-index: 2;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;

  svg {
    margin: 0 10px;
    color: white;
    transition: 0.4s ease-in-out;

    &:hover {
      color: gold;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  position: relative;
  font-size: 28px;
  font-weight: bold;

  svg {
    float: right;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      position: absolute;
      padding: 0 20px;
      visibility: hidden;
      opacity: none;

      a {
        font-size: 28px;
      }
    }
  }

  &:hover {
    cursor: pointer;

    li {
      animation-name: ${slideLeft1};
      animation-duration: 1s;
      animation-fill-mode: forwards;

      &:last-of-type {
        animation-name: ${slideLeft2};
        animation-delay: 0.3s;
        animation-duration: 1s;
        animation-fill-mode: forwards;
      }
    }
  }
`;

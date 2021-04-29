import React from "react";
import MediaQuery from "react-responsive";

import styled from "styled-components";
import { FiGithub, FiYoutube } from "react-icons/fi";
import { MediaGallery } from "./MediaGallery";

export const Flicker = () => {
  return (
    <Wrapper>
      <Section>
        <h2>🔥 Flicker 🔥</h2>
        <Description>
          <p>
            <strong>Flicker</strong> is a web app designed to help you keep
            track of movies or shows you want to watch or have watched. There is
            a unique feature allowing you to link your account with your SO or
            BFF. Once you are Flicker Partners, any movies or shows you are both
            interested in will be added to a joint watchlist you can each
            access. No more browsing for endless hours on a streaming app,
            looking for something your both want to watch!
          </p>
          <p>
            <strong>Technologies:</strong> React Native, React.js, Styled
            Components, CSS, Redux, MongoDB, and The Movie DataBase API.
          </p>
          <p>
            <strong>Accomplishments:</strong> Built from scratch (front-end &
            back-end), project MVP completed within 2 weeks.
          </p>
        </Description>
        <Links>
          <a
            href="https://youtu.be/QCDwgLBM3vQ"
            target="_blank"
            rel="noreferrer"
          >
            <FiYoutube size={40} />
          </a>
          <a
            href="https://github.com/MariePetit/flicker"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={30} />
          </a>
        </Links>
        <MediaQuery minWidth={1049}>
          <MediaGallery url={"https://youtu.be/QCDwgLBM3vQ"} />
        </MediaQuery>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 36px;
    text-align: center;
  }
`;

const Section = styled.div`
  width: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0 10px;
    transition: 0.4s ease-in-out;

    &:hover {
      color: gold;
    }
  }
`;

const Description = styled.div`
  padding: 30px 0 10px 0;
  text-align: center;

  p {
    padding: 10px 0;
  }
`;

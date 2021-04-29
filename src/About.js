import React from "react";

import styled from "styled-components";
import photo from "./assets/marie-photo.jpg";

export const About = () => {
  return (
    <Wrapper>
      <Frame>
        <ProfilePhoto src={photo} />
      </Frame>
      <Section>
        <h1>About Me</h1>
        Inspired to do a career change at the end of last year, I decided to
        follow my passion for technology and learn more about web development.
        As an avid gamer and technology user, I have been pursuing my infinite
        curiosity in understanding what happens behind the scenes of The
        Internet. Now that I graduated... Let the adventure begin!
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 86px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 80px;
  }
`;

const Frame = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 1;
`;

const ProfilePhoto = styled.img`
  max-width: 100%;
`;

const Section = styled.div`
  width: 80%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  margin-top: 30px;
  padding: 40px 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

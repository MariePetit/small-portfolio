import React from "react";
import MediaQuery from "react-responsive";

import styled from "styled-components";
import { FiGithub, FiYoutube } from "react-icons/fi";
import { MediaGallery } from "./MediaGallery";

export const EagleTek = () => {
  return (
    <>
      {/* DESKTOP */}
      <Wrapper>
        <Section>
          <h2>🦅 EagleTek 🦅</h2>
          <Description>
            <p>
              Collaborative group project with my colleagues,{" "}
              <a
                href="http://victoriapeart.com"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Victoria Peart</strong>
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/andrew-fenrich/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Andrew Feinrich</strong>
              </a>
              , as part of our Concordia Bootcamp, during which we had to
              develop an e-commerce web application, front-end and back-end. The
              application allows a user to navigate through the different
              products and categories, and proceed to purchase.
            </p>
            <p>
              <strong>Technologies:</strong> React Native, React.js, Styled
              Components, CSS, Redux, Git
            </p>
            <p>
              <strong>Accomplishments:</strong> Teamwork experience with the use
              of GIT, Github project and Agile method, completed in 1 week.
            </p>
          </Description>
          <Links>
            <a
              href="https://youtu.be/a9O7pC1S2KI"
              target="_blank"
              rel="noreferrer"
            >
              <FiYoutube size={40} />
            </a>
            <a
              href="https://github.com/v-prt/project-e-commerce"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub size={30} />
            </a>
          </Links>
          <MediaQuery minWidth={1049}>
            <MediaGallery url={"https://youtu.be/a9O7pC1S2KI"}></MediaGallery>
          </MediaQuery>
        </Section>
      </Wrapper>
    </>
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

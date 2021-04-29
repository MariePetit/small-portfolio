import React from "react";
import MediaQuery from "react-responsive";

import styled from "styled-components";

export const Projects = () => {
  return (
    <>
      {" "}
      <MediaQuery minWidth={1049}>
        <Wrapper>
          <Section>
            <h1>Projects</h1>
            <a href="#flicker">Flicker</a>
            <a href="#eagletek">EagleTek</a>
          </Section>
        </Wrapper>
      </MediaQuery>
      <MediaQuery maxWidth={1048}>
        <MobileWrapper>
          <Section>
            <h1>Projects</h1>
            <a href="#flicker">Flicker</a>
            <a href="#eagletek">EagleTek</a>
          </Section>
        </MobileWrapper>
      </MediaQuery>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 86px;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 80px;
  }

  a {
    font-size: 40px;
    margin: 0 20px;
    font-family: "Thasadith", sans-serif;
    font-weight: normal;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  padding-top: 86px;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 80px;
  }

  a {
    font-size: 30px;
    margin: 0 20px;
    font-family: "Thasadith", sans-serif;
    font-weight: normal;
  }
`;

const Section = styled.div`
  width: 80%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  margin-top: 30px;
  padding: 40px 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

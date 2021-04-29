import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from "react-icons/fi";

import styled, { keyframes } from "styled-components";

import photo from "./assets/marie-photo.jpg";
import currentUserBg from "./assets/marie-bg.jpg";

const MobileHomepage = () => {
  const onClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper>
      <UpButton onClick={onClick}>
        <FiArrowUp size={25} />
      </UpButton>
      <CreatorOverview
        style={{
          backgroundImage: `url(${currentUserBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPositionY: "15%",
        }}
      >
        <Backdrop>
          <Frame>
            <ProfilePhoto src={photo} />
          </Frame>
          <SubSection>
            <h1>Marie Petit</h1>
            <p>
              <span>💻</span>
              Web developer, ukulele learner, talented shower singer & mom of
              the cutest doggo.
              <span>🐺</span>
            </p>
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
          </SubSection>
        </Backdrop>
      </CreatorOverview>
      <NavMenu>
        <ul>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </ul>
      </NavMenu>
      <Separator id="about"></Separator>
      <Section>
        <h2>About</h2>
        <p>
          Inspired to do a career change at the end of last year, I decided to
          follow my passion for technology and learn more about web development.
          As an avid gamer and technology user, I have been pursuing my infinite
          curiosity in understanding what happens behind the scenes of The
          Internet. Now that I graduated... Let the adventure begin!
        </p>
      </Section>
      <Separator id="projects"></Separator>
      <Section>
        <h2>Projects</h2>
        <SubSection>
          <h3>🔥 Flicker 🔥</h3>
          <Video>
            <ReactPlayer
              url="https://youtu.be/QCDwgLBM3vQ"
              controls={true}
              width="100%"
              height="100%"
            />
          </Video>
          <p>
            <strong>Flicker</strong> is a web app designed to help you keep
            track of movies or shows you want to watch or have watched. To get
            started, set up your account and start browsing through our site!
            However, what makes Flicker so special is the possibility of linking
            your account with your significant other or BFF. Once you are
            Flicker Partners, any movies or shows you are both interested in
            will be added to a joint watchlist you can each access. No more
            browsing for endless hours on a streaming app, looking for something
            your both want to watch!
          </p>
          <p>
            <strong>Technologies:</strong> React Native, React.js, Styled
            Components, CSS, Redux, MongoDB, and The Movie DataBase API.
          </p>
          <p>
            <strong>Accomplishments:</strong> Built from scratch (front-end &
            back-end), project MVP completed within 2 weeks.
          </p>
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
        </SubSection>
        <SubSection>
          <h3>🦅 EagleTek 🦅</h3>
          <Video>
            <ReactPlayer
              url="https://youtu.be/a9O7pC1S2KI"
              controls={true}
              width="100%"
              height="100%"
            />
          </Video>
          <p>
            Collaborative group project with my colleagues,{" "}
            <a href="http://victoriapeart.com" target="_blank" rel="noreferrer">
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
            , as part of our Concordia Bootcamp, during which we had to develop
            an e-commerce web application, front-end and back-end. The
            application allows a user to navigate through the different products
            and categories, and proceed to purchase.
          </p>
          <p>
            <strong>Technologies:</strong> React Native, React.js, Styled
            Components, CSS, Redux, Git
          </p>
          <p>
            <strong>Accomplishments:</strong> Teamwork experience with the use
            of GIT, Github project and Agile method, completed in 1 week.
          </p>
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
        </SubSection>
      </Section>
    </Wrapper>
  );
};

const fadeInAnimation = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${fadeInAnimation};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  opacity: 0;

  h1 {
    font-size: 28px;
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    color: #ff8ca8;
  }

  h3 {
    font-size: 20px;
    padding: 10px 0 20px 0;
  }
`;

const UpButton = styled.button`
  background: none;
  position: fixed;
  right: 0;
  bottom: 0;
  border: 2px solid #ff8ca8;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  transition: 0.3s ease-in-out;
  color: #ff8ca8;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 22px;

  &:hover {
    cursor: pointer;
    color: #ff8ca8;
    border: 2px solid #ff8ca8;
    background-color: white;
  }
`;

const CreatorOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  p {
    font-weight: normal;
    font-style: italic;
    margin: auto;
    padding: 10px;

    span {
      font-style: normal;
    }
  }
`;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1.5px);
  width: 100%;
  padding: 20px;
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

const NavMenu = styled.nav`
  margin: 40px;

  ul {
    display: flex;
  }

  a {
    border: 1px solid white;
    border-radius: 8px;
    padding: 10px;
    margin: 0 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #ff8ca8;
      border: 1px solid #ff8ca8;
    }
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;

  p {
    padding: 10px 10px 20px;
    margin: auto;
  }
`;

const Separator = styled.div`
  border-top: 1px solid rgba(255, 192, 203, 0.4);
  width: 15%;
  text-align: center;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0 0 0;
`;

const Video = styled.div`
  width: 100%;
  height: 260px;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;

  a {
    margin: 0 10px;
    transition: 0.4s ease-in-out;

    &:hover {
      color: gold;
    }
  }
`;

export default MobileHomepage;

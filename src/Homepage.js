import React from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";

import styled from "styled-components";

import photo from "./assets/marie-photo.jpg";
import currentUserBg from "./assets/marie-bg.jpg";

const Homepage = () => {
  return (
    <Wrapper>
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
          </SubSection>
        </Backdrop>
      </CreatorOverview>
      <NavMenu>
        <ul>
          <a>About</a>
          <li>Projects</li>
          <li>Digital Art</li>
        </ul>
      </NavMenu>
      <Separator></Separator>
      <Section>
        <h2>About</h2>
        <p>
          Inspired to do a career change at the end of last year, I decided to
          follow my passion for technology and learn more about web development.
          As an avid gamer and technology user, I have been pursuing my infinite
          curiosity in understanding what happens behind the scenes of The
          Internet. Now that I graduated... Let the adventure begin!
        </p>
        <Links>
          <a href="https://www.linkedin.com/in/mariie-petit/" target="_blank">
            <FiLinkedin size={30} />
          </a>
          <a href="https://github.com/MariePetit" target="_blank">
            <FiGithub size={25} />
          </a>
          <a href="mailto:small.mariie@gmail.com" target="_blank">
            <FiMail size={30} />
          </a>
        </Links>
      </Section>
      <Separator></Separator>
      <Section>
        <h2>Projects</h2>
        <SubSection>
          <h3>🔥 Flicker 🔥</h3>
          <ReactPlayer url="https://youtu.be/QCDwgLBM3vQ" />
          <p>
            Flicker is a web app designed to help you keep track of movies or
            shows you want to watch or have watched. To get started, set up your
            account and start browsing through our site! However, what makes
            Flicker so special is the possibility of linking your account with
            your significant other or BFF. Once you are Flicker Partners, any
            movies or shows you are both interested in will be added to a joint
            watchlist you can each access. No more browsing for endless hours on
            a streaming app, looking for something your both want to watch!
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
            <NavLink to="https://youtu.be/QCDwgLBM3vQ">
              <FiYoutube size={40} />
            </NavLink>
            <NavLink to="https://github.com/MariePetit/flicker">
              <FiGithub size={30} />
            </NavLink>
          </Links>
        </SubSection>
        <SubSection>
          <h3>🦅 EagleTek 🦅</h3>
          <ReactPlayer url="https://youtu.be/a9O7pC1S2KI" />
          <p>
            Collaborative group project with my colleagues,{" "}
            <NavLink to="victoriapeart.com">Victoria Peart</NavLink> and Andrew
            Feinrich, as part of our Concordia Bootcamp, during which we had to
            develop an e-commerce web application, front-end and back-end. The
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
            <NavLink to="https://youtu.be/a9O7pC1S2KI">
              <FiYoutube size={40} />
            </NavLink>
            <NavLink to="https://github.com/v-prt/project-e-commerce">
              <FiGithub size={30} />
            </NavLink>
          </Links>
        </SubSection>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 15px;
    font-size: 28px;
  }

  h2 {
    margin-top: 15px;
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
    padding: 20px;
  }
`;

const CreatorOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: -5px;

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

  li {
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
  margin: 0 180px;
  text-align: center;
  padding: 10px;

  p {
    margin: auto;
    padding: 10px;
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
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px;
    transition: 0.4s ease-in-out;

    &:hover {
      color: gold;
    }
  }
`;

export default Homepage;

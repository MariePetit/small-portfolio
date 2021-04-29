import React from "react";
import ReactPlayer from "react-player";

import styled from "styled-components";

export const MediaGallery = ({ url }) => {
  return (
    <Menu>
      <Video>
        <ReactPlayer url={url} controls={true} />
      </Video>
    </Menu>
  );
};

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Video = styled.div`
  margin-bottom: 10px;
`;

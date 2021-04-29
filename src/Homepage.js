import React from "react";

import MediaQuery from "react-responsive";
import { MobileHomepage } from "./MobileHomepage";
import { DesktopHomepage } from "./DesktopHomepage";

export const Homepage = () => {
  return (
    <>
      <MediaQuery maxWidth={1048}>
        <MobileHomepage />
      </MediaQuery>
      <MediaQuery minWidth={1049}>
        <DesktopHomepage />
      </MediaQuery>
    </>
  );
};

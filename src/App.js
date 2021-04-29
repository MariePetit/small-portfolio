import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MediaQuery from "react-responsive";

import styled from "styled-components";
import stars from "./assets/stars.jpg";

import { MobileHomepage } from "./MobileHomepage";
import { DesktopHomepage } from "./DesktopHomepage";
import { Header } from "./Header";
import { MobileHeader } from "./MobileHeader";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Wrapper
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <MediaQuery minWidth={1049}>
          <Header />
        </MediaQuery>
        <MediaQuery maxWidth={1048}>
          <MobileHeader />
        </MediaQuery>
        <Switch>
          <Route exact path="/">
            <MediaQuery maxWidth={1048}>
              <MobileHomepage />
            </MediaQuery>
            <MediaQuery minWidth={1049}>
              <DesktopHomepage />
            </MediaQuery>
          </Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

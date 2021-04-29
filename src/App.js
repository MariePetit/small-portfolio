import GlobalStyles from "./GlobalStyles";

import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./Header";

import stars from "./assets/stars.jpg";
import { Homepage } from "./Homepage";

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
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
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

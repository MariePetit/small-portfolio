import GlobalStyles from "./GlobalStyles";

import { BrowserRouter } from "react-router-dom";
import DesktopHomepage from "./DesktopHomepage";
import MediaQuery from "react-responsive";
import MobileHomepage from "./MobileHomepage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <MediaQuery maxWidth={1048}>
        <MobileHomepage />
      </MediaQuery>
      <MediaQuery minWidth={1049}>
        <DesktopHomepage />
      </MediaQuery>
    </BrowserRouter>
  );
}

export default App;

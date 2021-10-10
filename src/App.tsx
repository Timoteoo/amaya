import { BrowserRouter, Route } from "react-router-dom";
import { ProfileContextProvider } from "./contexts/ProfileContext";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <ProfileContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
      </ProfileContextProvider>
    </BrowserRouter>
  );
}

export default App;

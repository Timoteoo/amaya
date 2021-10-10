import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} />
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { HeaderMain } from "./components/HeaderMain";
import { HeaderMenu } from "./components/HeaderMenu";
import { Shop } from "./components/Shop";
import { About } from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <header>
          <HeaderMain />
          <HeaderMenu />
        </header>

        <Shop />

        <About />

      </>
    </Router>
  );
};

export default App;

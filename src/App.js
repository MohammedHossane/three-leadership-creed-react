import { Fragment } from "react";
import Home from "./pages/Home/Home";
import Creed from "./pages/Creed/Creed";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

export const Buttons = () => {
  function playAnimation() {
    //selects the "img" and changes the properties to a 3 second animation that goes on infinently.
    document
      .querySelector("img")
      .style.setProperty(
        "animation",
        ".2s ease 0s infinite normal none running img"
      );
  }

  function stopAnimation() {
    document
      .querySelector("img")
      .style.setProperty("animation", ".2s ease 0s 0 normal none running img");
  }
  return (
    <Fragment>
      <button onClick={playAnimation} id="animationbutton" class="box">
        {" "}
        Start Animation{" "}
      </button>

      <button onClick={stopAnimation} id="animationbuttons" class="box">
        {" "}
        End Animation{" "}
      </button>
    </Fragment>
  );
};

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/creed" element={<Creed />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

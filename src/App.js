import { Fragment } from "react";
import Home from './pages/Home/Home';
import "./App.css";

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
      <Home />
    </div>
  );
}

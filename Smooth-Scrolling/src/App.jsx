import React from "react";
import "./index.css";
import Page1 from "./components/Page1";
import LocomotiveScroll from "locomotive-scroll";

const locomotiveScroll = new LocomotiveScroll();

const App = () => {
  return (
    <div>
      <Page1 />
      <Page1 />
      <Page1 />
    </div>
  );
};

export default App;

import React from "react";
import MainCard from "./components/MainCard";
import AboutCard from "./components/AboutCard";
import "../src/components/Styles/Styles.css";

const App = () => {
  return (
    <div className="parent">
      <AboutCard />
      <MainCard />
    </div>
  );
};

export default App;

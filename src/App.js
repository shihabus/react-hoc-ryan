import React, { useState, useEffect } from "react";

const WithResize = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return React.cloneElement(children, { windowWidth });
};

const ColoredWindow = ({ windowWidth }) => (
  <div
    className="App"
    style={{
      backgroundColor:
        windowWidth > 500 ? "red" : windowWidth > 400 ? "yellow" : "green"
    }}
  >
    <h2>{windowWidth}</h2>
  </div>
);

export default function App() {
  return (
    <WithResize>
      <ColoredWindow />
    </WithResize>
  );
}

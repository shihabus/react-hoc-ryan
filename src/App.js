import React, { useState, useEffect } from "react";

export default function App() {
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

  return (
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
}

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <h2 className="head" tabindex="1">
    Hello world in the JSX(!!!!1)
  </h2>
);

//React Functional componemt
const HeadingComponent1 = () => (
  <div className="container">
    <h1>Syntex different in the function component.</h1>
    <Title />
  </div>
); 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);

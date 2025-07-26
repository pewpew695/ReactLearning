import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading" className="heading">
    Namaste React using JSX{" "}
  </h1>
);

const number = 1000;
const HeadingComponent = () => {
  return <h1>Namaste Functional Component</h1>;
};
const HeadingComponent2 = () => (
  <div id="container">
    {100 + 200}
    <h2>{number}</h2>
    <h1>Namaste Functional Component</h1>
  </div>
);

console.log(HeadingComponent());
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent2 />);

import React from "react";
import ReactDOM from "react-dom";

//createElemnet ==> object -> HTML (on rendering)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Merry Christmas Back!!!"
);

//React Component
//Function component --> Function that returns JSX

const elem = <span>Keerthana</span>;
const title = <h1>Good Morning!!!{elem}</h1>;

const TitleComponent = () => {
  return <h1>Good evening</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {title}
      <TitleComponent></TitleComponent>
      <h1>Hello 2024</h1>;
    </div>
  );
};

// JSX is not HTML in JS
// JSX ==> babel transpiles it to  React.createElement before it reaches the JS engine --> parcel - babel
const jsxHeading = <h1>Welcome again!!</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

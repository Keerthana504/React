import React from "react";
import HeaderComp from "../day1";
//createElemnet ==> object -> HTML (on rendering)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Merry Christmas Back!!!"
);

const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "first" }, "First"),
  React.createElement("h2", { id: "second" }, "Second"),
  React.createElement("h3", { id: "third" }, "Third"),
]);

const headerJSX = (
  <div className="title">
    <h1>Fourth</h1>
    <h2>Fifth</h2>
    <h3>Sixth</h3>
  </div>
);

const HeaderComponent = () => {
  return (
    <div className="title">
      <h1>Seventh</h1>
      <h2>Eighth</h2>
      <h3>Ninth</h3>
    </div>
  );
};
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
      <HeaderComp></HeaderComp>
      {title}
      {header}
      {headerJSX}
      <HeaderComponent></HeaderComponent>
      <TitleComponent></TitleComponent>
      <h1>Hello 2024</h1>
    </div>
  );
};

// JSX is not HTML in JS
// JSX ==> babel transpiles it to  React.createElement before it reaches the JS engine --> parcel - babel
const jsxHeading = <h1>Welcome again!!</h1>;

export default HeadingComponent;

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "first1" }, "First H1"),
    React.createElement("h2", { id: "second1" }, "First H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "first2" }, "Second H1"),
    React.createElement("h2", { id: "second2" }, "Second H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
console.log(heading);
root.render(heading);

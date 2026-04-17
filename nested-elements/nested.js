const Parent = React.createElement(
  "div",
  {},
  React.createElement("div", {}, "This is child element"),
);

console.log(Parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);

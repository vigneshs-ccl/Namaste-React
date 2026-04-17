const heading = React.createElement(
  "h1",
  {id:"heading", style:{color:"red"}},
  "This is a heading rendering from react!",
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

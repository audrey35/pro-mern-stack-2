const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const helloContinents = Array.from(continents, (c) => `Hello ${c}!`);
const message = helloContinents.join(" ");

// use JSX to construct an element or an element hierarchy
// rather than nesting React.createElement() calls
const element = (
  <div title="Outer div">
    <h1>{message}</h1>
  </div>
);

// render the React elements and actually display them on the site
ReactDOM.render(element, document.getElementById("content"));

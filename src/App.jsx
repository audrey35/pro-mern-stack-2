// use JSX to construct an element or an element hierarchy
// rather than nesting React.createElement() calls
const element = (
  <div title="Outer div">
    <h1>Hello World!</h1>
  </div>
);

// render the React elements and actually display them on the site
ReactDOM.render(element, document.getElementById("content"));

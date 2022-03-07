// use JSX to construct an element or an element hierarchy
// rather than nesting React.createElement() calls
const element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", null, "Hello World!")); // render the React elements and actually display them on the site

ReactDOM.render(element, document.getElementById("content"));
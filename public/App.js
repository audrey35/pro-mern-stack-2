"use strict";

var continents = ["Africa", "America", "Asia", "Australia", "Europe"];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var message = helloContinents.join(" "); // use JSX to construct an element or an element hierarchy
// rather than nesting React.createElement() calls

var element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", null, message)); // render the React elements and actually display them on the site

ReactDOM.render(element, document.getElementById("content"));
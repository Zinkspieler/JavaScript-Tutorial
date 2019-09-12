let states = ["Rhode Island", "North Carolina", "New Mexico", "Kansas", "Massachusetts", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

let urls = states.map( (state) => {
  return `https://example.com/${urlify(state)}`;
})

let single = states.filter(state => state.split(/\s+/).length === 1);

let dakotas = states.filter(state => state.includes("Dakota"));
let doubles = states.filter(state => state.split(/\s+/).length === 2);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.reduce((total, n) => { return total + n });
let product = numbers.reduce((total, n) => { return total * n });

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}

let statesLengths = states.reduce( (dict, state) => {
  dict[state] = state.length;
  return dict;
}, {});

console.log(product);

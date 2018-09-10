/* const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); */

// Rendering Multiple Components
var numbers = [1, 2, 3, 4, 5];
var listItems = numbers.map(function (number) {
  return React.createElement(
    'li',
    null,
    number
  );
});

ReactDOM.render(React.createElement(
  'ul',
  null,
  listItems
), document.getElementById('root'));
/* const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); */

// Rendering Multiple Components
/* 
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
 */

//  Basic List Component
/*  function NumerList(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) => <li>{number}</li>);
   return (
     <ul>{listItems}</ul>
   );
 }

 const numbers = [1, 2, 3, 4, 5];
 ReactDOM.render(
   <NumerList numbers={numbers} />,
   document.getElementById('root')
 ); */

//  Assigning a key to our list
/* 
 function NumerList(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) => 
    <li key={number.toString()}>
      {number}
    </li>
   );
   return (
     <ul>{listItems}</ul>
   );
 }
 const numbers = [1, 2, 3, 4, 5];
 ReactDOM.render(
  <NumerList numbers={numbers}/>,
  document.getElementById('root')
 );
 */

function ListItems(props) {
  var value = props.value;
  return (
    //Wrong! there is no need to specify the key here:
    React.createElement(
      'li',
      { key: value.toString() },
      value
    )
  );
}
function NumerList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return (
      //Wrong! The key should have been specified
      React.createElement(ListItems, { value: value })
    );
  });
  return React.createElement(
    'ul',
    null,
    listItems
  );
}

var numbers = [1, 2, 3, 4, 5];
ReactDOM.render(React.createElement(NumerList, { numbers: numbers }), document.getElementById('root'));
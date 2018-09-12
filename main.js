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

//  Extracting Components with Keys

function ListItems(props) {
  //Correct! there is no need to specify the key here:
  return React.createElement(
    'li',
    null,
    props.value
  );
}

function NumerList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return (
      //Correct! key should  be specified inside
      React.createElement(ListItems, { key: number.toString(), value: number })
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
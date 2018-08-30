// Hello world example
// ReactDOM.render(
//   <h1>Hello, world3 !</h1>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// example 2
// const name = 'Daniel Elias';
// const element = <h2>Hola, {name}</h2>

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Example 3

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Daniel',
  lastName: 'Elias'
};

const element = (
  <h1>
    Hola, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);

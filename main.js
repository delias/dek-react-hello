// Hello world example

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return React.createElement(
      'h1',
      null,
      'Hello, ',
      formatName(user),
      '!'
    );
  }
  return React.createElement(
    'h1',
    null,
    'Hello, Stranger'
  );
}

var user = {
  firstName: 'Daniel',
  lastName: 'Elias',
  avatarUrl: 'src/logoteogracia.png'

  // const element = (
  //   getGreeting(user)
  // );
  // const element = <img src={user.avatarUrl} />;

};var title = response.potentiallyMaliciousInput;
// This is safe:
var element = React.createElement(
  'h1',
  null,
  title
);

// const element = (
//   <div>
//     <img src={user.avatarUrl} />
//     <h1>Hello, {formatName(user)}!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

ReactDOM.render(element, document.getElementById('root'));
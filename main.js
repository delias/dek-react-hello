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
  // const element = <div tabIndex="0"></div>;

  // const element = (
  //   getGreeting(user)
  // );
  // const element = <img src={user.avatarUrl} />;
};var element = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello!'
  ),
  React.createElement(
    'h2',
    null,
    'Good to see you here.'
  )
);

ReactDOM.render(element, document.getElementById('root'));
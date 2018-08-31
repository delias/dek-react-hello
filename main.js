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
  avatarUrl: 'https://teogracia.com/wp-content/themes/teotheme/images/logoteograciaverde.png'
  // const element = <div tabIndex="0"></div>;

  // const element = (
  //   getGreeting(user)
  // );
};var element = React.createElement('img', { src: user.avatarUrl });

ReactDOM.render(element, document.getElementById('root'));
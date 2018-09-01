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

  // const element = (
  //   <div>
  //     <img src={user.avatarUrl} />
  //     <h1>Hello, {formatName(user)}!</h1>
  //     <h2>Good to see you here.</h2>
  //   </div>
  // );

  // const element = (
  //   <h1 className="greeting">
  //     Hello, world!
  //   </h1>
  // );

  // const element = React.createElement(
  //   'h1',
  //   {className: 'greeting'},
  //   'Hello world!'
  // );

  //const element = getGreeting(user);

};function tick() {
  var element = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello, world!'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      new Date().toLocaleTimeString(),
      '.'
    )
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
// Hello world example

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if(user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger</h1>;
}

const user = {
  firstName: 'Daniel',
  lastName: 'Elias',
  avatarUrl: 'src/logoteogracia.png'
}
// const element = <div tabIndex="0"></div>;

// const element = (
//   getGreeting(user)
// );
const element = <img src={user.avatarUrl}></img>;

ReactDOM.render(
  element, 
  document.getElementById('root')
);

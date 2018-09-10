/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    //This binding is necessary to make this world in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
*/
/*
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
*/
/*
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
*/


// Conditional Rendering

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />
  }
  else return <GuestGreeting />
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);

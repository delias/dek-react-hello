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

/*
ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  // <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
*/

// Element Variables
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  // render() {
  //   const isLoggedIn = this.state.isLoggedIn;
  //   let button;

  //   if (isLoggedIn) {
  //     button = <LogoutButton onClick={this.handleLogoutClick} />;
  //   } else {
  //     button = <LoginButton onClick={this.handleLoginClick} />;
  //   }

  //   return(
  //     <div>
  //       <Greeting isLoggedIn={isLoggedIn} />
  //       {button}
  //     </div>
  //   );
  // }

  // Inline If-Else with Conditional Operator
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
      </div>
    );
  }

}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);

// Inline if with Logical && Operator
/*
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
*/


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
/*
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
*/
/*
ReactDOM.render(
  <Greeting isLoggedIn={true} />,
  // <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
*/

// Element Variables
/*
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
*/
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

// Preventing Component from Rendering

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return React.createElement(
    'div',
    { className: 'warning' },
    'Warning!'
  );
}

var Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this.state = { showWarning: true };
    _this.handleToggleClick = _this.handleToggleClick.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'handleToggleClick',
    value: function handleToggleClick() {
      this.setState(function (prevState) {
        return {
          showWarning: !prevState.showWarning
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(WarningBanner, { warn: this.state.showWarning }),
        React.createElement(
          'button',
          { onClick: this.handleToggleClick },
          this.state.showWarning ? 'Hide' : 'Show'
        )
      );
    }
  }]);

  return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('root'));
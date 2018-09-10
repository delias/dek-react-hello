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

function UserGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Welcome back!'
  );
}

function GuestGreeting(props) {
  return React.createElement(
    'h1',
    null,
    'Please sign up'
  );
}

function Greeting(props) {
  var isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return React.createElement(UserGreeting, null);
  } else return React.createElement(GuestGreeting, null);
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
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Login'
  );
}
function LogoutButton(props) {
  return React.createElement(
    'button',
    { onClick: props.onClick },
    'Logout'
  );
}

var LoginControl = function (_React$Component) {
  _inherits(LoginControl, _React$Component);

  function LoginControl(props) {
    _classCallCheck(this, LoginControl);

    var _this = _possibleConstructorReturn(this, (LoginControl.__proto__ || Object.getPrototypeOf(LoginControl)).call(this, props));

    _this.handleLoginClick = _this.handleLoginClick.bind(_this);
    _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);
    _this.state = { isLoggedIn: false };
    return _this;
  }

  _createClass(LoginControl, [{
    key: 'handleLoginClick',
    value: function handleLoginClick() {
      this.setState({ isLoggedIn: true });
    }
  }, {
    key: 'handleLogoutClick',
    value: function handleLogoutClick() {
      this.setState({ isLoggedIn: false });
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

  }, {
    key: 'render',
    value: function render() {
      var isLoggedIn = this.state.isLoggedIn;
      return React.createElement(
        'div',
        null,
        'The user is ',
        React.createElement(
          'b',
          null,
          isLoggedIn ? 'currently' : 'not'
        ),
        ' logged in.'
      );
    }
  }]);

  return LoginControl;
}(React.Component);

ReactDOM.render(React.createElement(LoginControl, null), document.getElementById('root'));

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
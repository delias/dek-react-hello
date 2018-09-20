var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); */

// Rendering Multiple Components
/* 
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
 */

//  Basic List Component
/*  function NumerList(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) => <li>{number}</li>);
   return (
     <ul>{listItems}</ul>
   );
 }

 const numbers = [1, 2, 3, 4, 5];
 ReactDOM.render(
   <NumerList numbers={numbers} />,
   document.getElementById('root')
 ); */

//  Assigning a key to our list
/* 
 function NumerList(props) {
   const numbers = props.numbers;
   const listItems = numbers.map((number) => 
    <li key={number.toString()}>
      {number}
    </li>
   );
   return (
     <ul>{listItems}</ul>
   );
 }
 const numbers = [1, 2, 3, 4, 5];
 ReactDOM.render(
  <NumerList numbers={numbers}/>,
  document.getElementById('root')
 );
 */

//  Extracting Components with Keys
/* 
function ListItems(props) {
  //Correct! there is no need to specify the key here:
  return (
    <li>
      {props.value}
    </li>
  );
}

function NumerList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
    //Correct! key should  be specified inside
    <ListItems key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumerList numbers={numbers} />,
  document.getElementById('root')
);
 */

//  Keys Must Only Be Unique Among Siblings
/* 
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) => 
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: "Hola Mundo", content: "Bienveido a aprender React!"},
  {id: 2, title: "Instalación", content: "Puedes instalar React desde npm."}
];

ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
 */
/* 
function ListItem(props) {
  //Correct! there is no need to specify the key here:
  return (
    <li>
      {props.value}
    </li>
  );
}

function NumerList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => 
        <ListItem  key={number.toString()} 
                   value={number} />
      )}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumerList numbers={numbers} />,
  document.getElementById('root')
);
 */

// Forms
// Controlled Components
/* 
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert( 'Un nombre fue ingresado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
 */

// The textarea Tag
/* 
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Por favor, escriba un ensayo acerca de su elemente DOM favorito'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Un ensayo fue agregado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Ensayo:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);
 */

// The select Tag
/* 
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coco'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Tu sabor favorito es: ' + this.state.value);
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Escoge tu sabor favorito: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="uva">Uva</option>
            <option value="limón">Limón</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
 */

// The file input Tag
// Handling Multiple Inputs
/* 
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
 */

/* Lifting State Up */

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return React.createElement(
      'p',
      null,
      'The water would boil.'
    );
  }
  return React.createElement(
    'p',
    null,
    'The water would not boil.'
  );
}

var Calculator = function (_React$Component) {
  _inherits(Calculator, _React$Component);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.state = { temperature: '' };
    return _this;
  }

  _createClass(Calculator, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ temperature: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var temperature = this.state.temperature;
      return React.createElement(
        'fieldset',
        null,
        React.createElement(
          'legend',
          null,
          'Enter temperature in Celsius.'
        ),
        React.createElement('input', { value: temperature, onChange: this.handleChange }),
        React.createElement(BoilingVerdict, { celcius: parseFloat(temperature) })
      );
    }
  }]);

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));
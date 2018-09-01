
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return React.createElement("img", {
    className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name
  });
}

function UserInfo(props) {
  return React.createElement(
    "div",
    { className: "UserInfo" },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(
      "div",
      { className: "UserInfo-name" },
      props.user.name
    )
  );
}

function Comment(props) {
  return React.createElement(
    "div",
    { className: "Comment" },
    React.createElement(UserInfo, { user: props.author }),
    React.createElement(
      "div",
      { className: "Comment-text" },
      props.text
    ),
    React.createElement(
      "div",
      { className: "Comment-data" },
      formatDate(props.date)
    )
  );
}

var comment = {
  date: new Date(),
  text: 'Esto es un comentario',
  author: {
    name: 'Daniel Elias',
    avatarUrl: 'src/logoteogracia.png'
  }
};

function App() {
  return React.createElement(Comment, {
    date: comment.date,
    text: comment.text,
    author: comment.author
  });
}

var element = React.createElement(App, null);

ReactDOM.render(element, document.getElementById('root'));
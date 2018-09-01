
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img 
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-data">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Esto es un comentario',
  author: {
    name: 'Daniel Elias',
    avatarUrl: 'src/logoteogracia.png',
  },
};

function App() {
  return (
    <Comment
      date={comment.date}
      text={comment.text}
      author= {comment.author}
    />
  );
}

const element = <App />;

ReactDOM.render(
  element, 
  document.getElementById('root')
);

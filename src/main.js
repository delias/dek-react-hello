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
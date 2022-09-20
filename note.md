# Core React Concept
## We can style react component in three ways:
### Inline Styling
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Inline Styling */}
      <h2 style={{color: 'violet', backgroundColor: 'gray'}}>Use Inline Styling.</h2>
    </div>
  );
}
export default App;
```
### Internal Styling
```js
import './App.css';

// Internal Styling
const internalStyle = {
  color: 'blue',
  backgroundColor: 'skyblue'
};

function App() {
  return (
    <div className="App">
      {/* Internal Styling */}
      <h2 style={internalStyle}>Use Internal Styling.</h2>
    </div>
  );
}
export default App;
```
### External Styling
#### App.js
```js
import './App.css';

function App() {
  return (
    <div className="App">
      {/* External Styling */}
      <h1 className="externalStyle">Use external styling.</h1>
      
    </div>
  );
}
export default App;
```
#### App.css
```css
/* External Styling */
.externalStyle {
  color: red;
  background-color: antiquewhite;
}
```

## Create Component & Data Send with Props
```js
import './App.css';

const myStyle = {
  width: '50%',
  margin: '2rem auto',
  border: '1px solid gray',
  borderRadius: '10px',
  backgroundColor: '#dad2d2'
};

function App() {
  return (
    <div className="App">
      <Person name="Md. Shamim Sarker" job="Software Developer"></Person>
      <Person name="Mst. Sarmin Sultana" job="Civil Engineering"></Person>
    </div>
  );
}

function Person(props) {
  return (
    <div style={myStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Job: {props.job}</h4>
    </div>
  );
}
export default App;
```
## Data Send with Props Using Array
```js
import './App.css';

const myStyle = {
  width: '50%',
  margin: '2rem auto',
  padding: '10px',
  border: '1px solid gray',
  borderRadius: '10px',
  backgroundColor: '#dad2d2'
};

function App() {
  const persons = [
    [
      "Shamim",
      "Snigdha"
    ],
    [
      "Shahin",
      "Beauty"
    ]
  ];
  return (
    <div className="App">
      {
        persons.map(person => <Person name={person[0]} partner={person[1]}></Person>)
      }
    </div>
  );
}

function Person(props) {
  return (
    <div style={myStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Partner: {props.partner}</h3>
    </div>
  );
}
export default App;
```
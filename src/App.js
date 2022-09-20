import './App.css';

const myStyle = {
  width: '50%',
  margin: '2rem auto',
  padding: '10px',
  border: '1px solid gray',
  borderRadius: '10px',
  backgroundColor: '#dad2d2'
};

const persons = [["Shamim", "Snigdha"], ["Shahin", "Beauty"]];

function App() {
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
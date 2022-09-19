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

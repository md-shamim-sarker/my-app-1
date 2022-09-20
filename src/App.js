import './App.css';

const styleObject = {
  color: "red",
  backgroundColor: "pink"
};

function App() {
  return (
    <div className="App">
      {/* Inline Styling */}
      <h2 style={{color: "blue", backgroundColor: "yellow"}}>Hello World!</h2>
      {/* Internal Styling */}
      <h2 style={styleObject}>Hello Bangladesh.</h2>
      {/* External Styling */}
      <h2>Hello Rangpur.</h2>
    </div>
  );
}

export default App;
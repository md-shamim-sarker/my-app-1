import {useEffect, useState} from 'react';
import './App.css';

const cardStyle = {
  width: '25rem',
  margin: '2rem auto',
  border: '1px solid gray',
  borderRadius: '10px',
  backgroundColor: 'skyblue'
};

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const options = {method: 'GET', headers: {Authorization: ''}};
    return () => {
      fetch(url, options)
        .then(response => response.json())
        .then(response => setUsers(response))
        .catch(err => console.error(err));
    };
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      <h3>Total Users: {users.length}</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  );
}

function User(props) {
  return (
    <div style={cardStyle}>
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
    </div>
  );
}

export default App;
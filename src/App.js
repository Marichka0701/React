import './App.css';
import {useEffect, useState} from "react";

import Users from "./Components/Users/Users";

import '../src/Components/general.css';

function App() {
  const[users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
  },[]);

  console.log(users);

  return (
    <div className="App">
      <Users users={users}/>
    </div>
  );
}

export default App;

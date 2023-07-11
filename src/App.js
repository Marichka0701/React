import './App.css';
import {useEffect, useState} from "react";

import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";

import '../src/Components/general.css'

function App() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);

  const setData = (data) => {
    setUserId(data);
  }

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Users users={users} setData={setData}/>
      <Posts userId={userId} />
    </div>
  );
}

export default App;

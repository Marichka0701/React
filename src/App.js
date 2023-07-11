import './App.css';
import ChildOne from "./Components/ChildOne/ChildOne";
import ChildTwo from "./Components/ChildTwo/ChildTwo";
import {createContext} from "react";

function App() {
    const UserContext = createContext(null);

  return (
    <div className="App">
        <UserContext.Provider value={{}}>
            <ChildOne/>
            <ChildTwo/>
        </UserContext.Provider>
    </div>
  );
}

export default App;

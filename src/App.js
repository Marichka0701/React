import './App.css';
import ChildOne from "./Components/ChildOne/ChildOne";
import ChildTwo from "./Components/ChildTwo/ChildTwo";
import {createContext, useState} from "react";

export const UserContext = createContext(null);
function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="App">
            <UserContext.Provider value={{user, setUser}}>
                <ChildOne/>
                <ChildTwo/>
            </UserContext.Provider>
        </div>
    );
}

export default App;

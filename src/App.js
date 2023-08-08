import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import Users from "./components/Users/Users";
import Smart from "./components/Smart/Smart";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Smart/>
                <Users/>
            </div>
        </Provider>
    );
}

export default App;

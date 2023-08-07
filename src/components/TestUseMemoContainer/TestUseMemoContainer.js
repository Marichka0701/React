import React, {useState} from 'react';
import TestUseMemo from "./TestUseMemo/TestUseMemo";

const TestUseMemoContainer = () => {
    const [data, setData] = useState(0);
    const [todos, setTodos] = useState(['todo', 'todo2', 'todo3']);

    const handleClick = () => {
        setTodos(prev => [...prev, 'new todo'])
    }

    return (
        <div>
            <TestUseMemo data={data} setData={setData}/>
            <br/>
            <h2>todos</h2>
            <ul>{todos.map((todo, index) => <li key={index}>{todo}</li>)}</ul>
            <button
                onClick={() => handleClick()}
                style={{width: 200, height: 50, background: 'blue'}}
            >add new todo</button>
        </div>
    );
};

export default TestUseMemoContainer;
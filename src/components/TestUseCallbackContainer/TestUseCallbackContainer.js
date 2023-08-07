import React, {useCallback, useState} from 'react';
import TestUseCallback from "./TestUseCallback/TestUseCallback";

const TestUseCallbackContainer = () => {
    const [data, setData] = useState(0);
    const [todos, setTodos] = useState(['todo1', 'todo2', 'todo3']);

    const handleClick = () => {
        setTodos(prev => [...prev, 'new todo'])
    }

    const calculating = (data) => {
        for (let i = 0; i < 100000000; i++) {
            data++;
        }
        return data;
    }

    const value = useCallback(() => {
        return calculating(data);
    }, [data])

    return (
        <div>
            <h1>test use callback</h1>
            <br/>
            <TestUseCallback value={value} setData={setData}/>
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

export default TestUseCallbackContainer;
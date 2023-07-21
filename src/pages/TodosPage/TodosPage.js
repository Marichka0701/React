import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/axios.todos.service";
import styles from './Todos.module.css';
import Todo from "./Todo/Todo";

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll()
            .then(value => setTodos(value.data))
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todos list</h1>
            <div className={styles.todos}>
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}/>)
                }
            </div>
        </div>
    );
};

export default TodosPage;
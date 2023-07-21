import React from 'react';
import styles from './Todo.module.css';

const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;

    return (
        <div className={styles.todo}>
            <div className={styles.todo_block}><b>id:</b> {id} </div>
            <div className={styles.todo_block}><b>userId:</b> {userId} </div>
            <div className={styles.todo_block}><b>title:</b> {title} </div>
            <div className={styles.todo_block}><b>completed:</b> {completed === false ?
                `${completed.toString()}❌`
                : `${completed.toString()}✅`}
            </div>
        </div>
    );
};

export default Todo;
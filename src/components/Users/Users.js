import React from 'react';

import styles from './Users.module.css';
import User from "./User/User";

const Users = ({users}) => {
    return (
        <div className={styles.users}>
            <h1>users</h1>
            {
                users.map((user, index) => <User key={index} user={user}/>)
            }
        </div>
    );
};

export default Users;
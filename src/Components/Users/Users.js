import React from 'react';

import styles from './Users.module.css';
import User from "./User/User";
const Users = ({users}) => {
    return (
        <div className={styles.users}>
            {
                users.map(user => <User user={user}/>)
            }
        </div>
    );
};

export default Users;
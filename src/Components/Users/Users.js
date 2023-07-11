import React, {useEffect, useState} from 'react';

import User from "./User/User";

import styles from './Users.module.css'
const Users = ({users, setData}) => {

    return (
        <div className={styles.users}>
            {
                users.map(user => <User key={user.id} user={user} setData={setData} />)
            }
        </div>
    );
};

export default Users;
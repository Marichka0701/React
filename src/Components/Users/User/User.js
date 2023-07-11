import React from 'react';

import styles from './User.module.css'

const User = ({user, setData}) => {
    const { id, name, username, email, phone} = user;
    const handleClick = (id) => {
        setData(id);
    }

    return (
        <div className={styles.user}>
            <div> <b>ID:</b> {id} </div>
            <div> <b>NAME:</b> {name} </div>
            <div> <b>USERNAME:</b> {username} </div>
            <div> <b>EMAIL:</b> {email} </div>
            <div> <b>PHONE:</b> {phone} </div>
            <button onClick={() => handleClick(id)} className={styles.btn}> Show posts </button>
        </div>
    );
};

export default User;
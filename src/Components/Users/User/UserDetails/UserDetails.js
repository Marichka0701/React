import React from 'react';
import styles from './UserDetails.module.css'
const UserDetails = ({details}) => {
    const { id, name, username, email, phone, website } = details;
    return (
        <div className={styles.user_details}>
            <div> <b>ID:</b> {id} </div>
            <div> <b>NAME:</b> {name} </div>
            <div> <b>USERNAME:</b> {username} </div>
            <div> <b>EMAIL:</b> {email} </div>
            <div> <b>PHONE:</b> {phone} </div>
            <div> <b>WEBSITE:</b> {website} </div>
        </div>
    );
};

export default UserDetails;
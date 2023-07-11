import React from 'react';

import styles from './UserAddress.module.css'
const UserAddress = ({address}) => {
    const { street, city, suite } = address;

    return (
        <div className={styles.user_address}>
            <div> <b>STREET: </b> {street} </div>
            <div> <b>CITY: </b> {city} </div>
            <div> <b>SUITE: </b> {suite} </div>
        </div>
    );
};

export default UserAddress;
import React from 'react';
import UserDetails from "./UserDetails/UserDetails";
import UserAddress from "./UserAddress/UserAddress";
import Company from "./Company/Company";

import styles from './User.module.css';

const User = ({user}) => {
    const {address, company, ...details} = user;

    return (
        <div className={styles.user}>
            <UserDetails details={details}/>
            <UserAddress address={address}/>
            <Company company={company}/>
        </div>
    );
};

export default User;
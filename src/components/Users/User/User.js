import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default User;
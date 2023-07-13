import React, {useRef} from 'react';

import styles from './AddUser.module.css'

const AddUser = () => {
    const nameRef = useRef('');
    const usernameRef = useRef('');
    const emailRef = useRef('');

    const handleClick = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value, usernameRef.current.value, emailRef.current.value);

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: nameRef.current.value,
                    username: usernameRef.current.value,
                    email: emailRef.current.value,
                }
            ),

        })
            .then(response => response.json())
            .then(users => console.log(users))
    }

    return (
        <div className={styles.wrapper}>
            <h2>ADD A NEW USER</h2>
            <form action='#'>
                <label>
                    Name:
                    <input type="text" required ref={nameRef}/>
                </label>
                <label>
                    Username:
                    <input type="text" required ref={usernameRef}/>
                </label>
                <label>
                    Email:
                    <input type="email" required ref={emailRef}/>
                </label>
                <button
                    className={styles.addUser}
                    type="submit"
                    onClick={handleClick}>Add new user
                </button>
            </form>
        </div>
    );
}

export default AddUser;
import React, {useRef} from 'react';

import styles from './Form.module.css';

const Form = () => {

    const titleRef = useRef('');
    const bodyRef = useRef('');

    const handleClick = (e) => {
        e.preventDefault();
        console.log(titleRef.current.value, bodyRef.current.value);

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    userId: 1,
                    title: titleRef.current.value,
                    body: bodyRef.current.value,
                }
            )
        }).then(response=> response.json())
            .then(posts => console.log(posts))
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <h2>ADD A NEW POST</h2>
                <form action='#'>
                    <label>
                        Post`s title:
                        <input type="text" required ref={titleRef} />
                    </label>
                    <label>
                        Post`s body:
                        <input type="text" required ref={bodyRef} />
                    </label>

                    <button
                        className={styles.addUser}
                        type="submit"
                        onClick={handleClick}
                        >Add a new post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
import React from 'react';
import '../general.css';
import styles from './post.module.css'
const Post = (props) => {
    const { post, handleClick, isActive} = props;

    return (
        isActive === post.id ?
            <div className={styles.post_container}>
                <h2> <b> ID: </b> {post.id} </h2>
                <h2> <b> TITLE: </b> {post.title} </h2>
                <p>
                    <b>BODY:</b> {post.body} </p>
            </div>
            :
            <div className={styles.post_container}>
            <h2> <b> ID: </b> {post.id} </h2>
            <h2> <b> TITLE: </b> {post.title} </h2>
            <div>
                <button
                    onClick={ () => handleClick(post.id) }
                    className={styles.btn}
                > Show me </button>
            </div>
        </div>
    );
};

export default Post;
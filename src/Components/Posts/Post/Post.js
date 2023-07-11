import React from 'react';

import styles from './Post.module.css'
const Post = ({post}) => {
    const { id, body, title } = post;

    return (
        <div className={styles.post}>
            <div> <b>ID: </b> {id} </div>
            <div> <b>TITLE: </b> {title} </div>
            <div> <b>BODY: </b> {body} </div>
        </div>
    );
};

export default Post;
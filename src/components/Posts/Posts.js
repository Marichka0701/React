import React from 'react';
import Post from "./Post/Post";

import styles from './Posts.module.css';

const Posts = ({posts}) => {
    return (
        <div className={styles.posts}>
            <h1>posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
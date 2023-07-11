import React, {useEffect, useState} from 'react';

import Post from "./Post/Post";

import styles from './Posts.module.css';

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [userId]);

    return (
        <div className={styles.posts}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;
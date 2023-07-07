import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";
import '../general.css';
import styles from './posts.module.css';

const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then(posts => setAllPosts(posts));
    }, []);

    const handleClick = (id) => {
        setIsActive(id);
    }

    return (
        <div className={styles.wrapper}>
            {
                allPosts?.map(post => <Post
                    key={post.id}
                    post={post}
                    handleClick={handleClick}
                    isActive={isActive} />)
            }
        </div>
    );
};

export default Posts;